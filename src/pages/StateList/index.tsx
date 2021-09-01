import React, { useState, useEffect } from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';
import { FlatList, Alert, ActivityIndicator } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import api from '../../services/api';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Container from '../../components/Container';
import Heading from '../../components/Heading';
import SubHeading from '../../components/SubHeading';
import InfoText from '../../components/InfoText';
import SmallText from '../../components/SmallText';
import { CasesStates } from '../../components/CasesStates';
import { SearchInput, BackButton } from './styles';
import { useTheme } from 'styled-components/native';

const popAction = StackActions.pop(1);

interface DataProps {
  uid: number;
  uf: string;
  state: string;
  cases: number;
  suspects: number;
  refuses: number;
  deaths: number;
  datetime: string;
}

export function StateList() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataProps[]>([]);
  const [dataUpdated, setDataUpdated] = useState<DataProps[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const theme = useTheme();
  const navigation = useNavigation();

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      setLoading(true);
      const response = await api.get('/');

      const list = response.data.data;
      setData(list);
      setLoading(false);
    } catch (error) {
      Alert.alert(error);
      setLoading(false);
    }
  }

  function handleSearchStates(searchTerm: string) {
    setSearchTerm(searchTerm);
    const filter = data.filter((item: DataProps) =>
      item.state.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setDataUpdated(filter);
  }

  return (
    <Container>
      <BackButton onPress={() => navigation.dispatch(popAction)}>
        <Icon name="chevron-left" color={theme.colors.primary} size={20} />
        <Heading>Listagem por Estados</Heading>
      </BackButton>
      <SearchInput
        placeholder="Filtrar Estado"
        placeholderTextColor={theme.colors.text}
        value={searchTerm}
        onChangeText={(inputText) => handleSearchStates(inputText)}
      />
      <FlatList
        data={searchTerm === '' ? data : dataUpdated}
        ListEmptyComponent={() =>
          loading ? (
            <ActivityIndicator />
          ) : (
            <InfoText color={theme.colors.text}>
              Não existe relatório para este estado.
            </InfoText>
          )
        }
        renderItem={({ item }) => (
          <>
            <SubHeading>
              {item.state}{' '}
              <SmallText color={theme.colors.text}>
                {`${format(
                  parseISO(item.datetime),
                  "dd 'de' MMMM', às' H:mm'h'",
                  { locale: pt }
                )}`}
              </SmallText>
            </SubHeading>
            <CasesStates data={item} />
          </>
        )}
        keyExtractor={(item) => item.state}
      />
    </Container>
  );
}
