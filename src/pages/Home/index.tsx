/* eslint-disable react/no-did-mount-set-state */
import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import api from '../../services/api';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Container from '../../components/Container';
import Heading from '../../components/Heading';
import SubHeading from '../../components/SubHeading';
import SectionTitle from '../../components/SectionTitle';
import InfoText from '../../components/InfoText';
import { Cases } from '../../components/Cases';

import {
  SelfCheckUpContainer,
  SelfCheckUpInfosContainer,
  ActionsContainer,
} from './styles';

import { useTheme } from 'styled-components/native';

interface DataProps {
  confirmed: number;
  deaths: number;
  updated_at: string;
}

export function Home() {
  const navigation = useNavigation();
  const theme = useTheme();

  const [loading, setLoading] = useState(false);
  const [countryData, setCountryData] = useState<DataProps>({} as DataProps);
  const [currentDate, setCurrentDate] = useState(
    format(new Date(), "dd 'de' MMMM' de 'yyyy'", {
      locale: pt,
    })
  );

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      setLoading(true);
      const response = await api.get('/brazil');

      const selectedCountry = response.data.data;
      console.log(selectedCountry);
      setCountryData({
        confirmed: selectedCountry.confirmed,
        deaths: selectedCountry.deaths,
        updated_at: format(
          parseISO(selectedCountry.updated_at),
          "dd 'de' MMMM', às' H:mm'h'",
          { locale: pt }
        ),
      });
      setLoading(false);
    } catch (error) {
      Alert.alert(error.messsage);
      setLoading(false);
    }
  }

  function openDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  return (
    <Container>
      <Heading>Brasil</Heading>
      <SectionTitle>{`Situação atual em ${currentDate}`}</SectionTitle>
      <SubHeading>Últimos Números Covid-19</SubHeading>
      <InfoText>{`Última Atualização: ${countryData.updated_at}`}</InfoText>
      <Cases loading={loading} data={countryData} />
      <ActionsContainer onPress={() => navigation.navigate('casesByStates')}>
        <SubHeading color={theme.colors.shape}>Listagem Por Estados</SubHeading>
        <Icon name="chevron-right" color={theme.colors.shape} size={30} />
      </ActionsContainer>
      <ActionsContainer onPress={() => navigation.navigate('casesByCountry')}>
        <SubHeading color={theme.colors.shape}>Listagem Por Países</SubHeading>
        <Icon name="chevron-right" color={theme.colors.shape} size={30} />
      </ActionsContainer>
      <SelfCheckUpContainer onPress={() => navigation.navigate('selfCheckUp')}>
        <SelfCheckUpInfosContainer>
          <SubHeading color={theme.colors.shape}>
            Auto Teste para o Covid-19
          </SubHeading>
          <InfoText color={theme.colors.shape}>
            Contém uma lista de questões para checar sua condição fisíca.
          </InfoText>
        </SelfCheckUpInfosContainer>
        <Icon name="chevron-right" color={theme.colors.shape} size={30} />
      </SelfCheckUpContainer>
    </Container>
  );
}
