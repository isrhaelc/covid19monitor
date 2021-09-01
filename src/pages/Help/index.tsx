import React from 'react';

import { ScrollView } from 'react-native';

import Container from '../../components/Container';
import Heading from '../../components/Heading';
import SubHeading from '../../components/SubHeading';
import SectionTitle from '../../components/SectionTitle';
import InfoText from '../../components/InfoText';

import {
  TipsContainer,
  IconContainer,
  TipsInfosContainer,
  Image,
} from './styles';

import texts from '../../constants/texts';
import { useTheme } from 'styled-components/native';

const images = {
  image1: require('../../../assets/Images/TipsIcons/029-stayhome.png'),
  image2: require('../../../assets/Images/TipsIcons/016-pregnant.png'),
  image3: require('../../../assets/Images/TipsIcons/020-prevention.png'),
  image4: require('../../../assets/Images/TipsIcons/034-medical.png'),
};

export function Help() {
  const theme = useTheme();

  return (
    <Container>
      <Heading>Ajudar</Heading>
      <SubHeading>Como você pode contribuir</SubHeading>
      <ScrollView>
        <TipsContainer orientation="left" height="120px">
          <TipsInfosContainer>
            <SectionTitle color={theme.colors.shape}>
              {texts.helps.help_1.title}
            </SectionTitle>
            <InfoText color={theme.colors.shape}>
              {texts.helps.help_1.text}
            </InfoText>
          </TipsInfosContainer>
          <IconContainer>
            <Image
              source={images.image1}
              style={{ tintColor: theme.colors.shape }}
            />
          </IconContainer>
        </TipsContainer>
        <TipsContainer height="140px">
          <IconContainer>
            <Image
              source={images.image2}
              style={{ tintColor: theme.colors.shape }}
            />
          </IconContainer>
          <TipsInfosContainer>
            <SectionTitle color={theme.colors.shape}>
              {texts.helps.help_2.title}
            </SectionTitle>
            <InfoText color={theme.colors.shape}>
              {texts.helps.help_2.text}
            </InfoText>
          </TipsInfosContainer>
        </TipsContainer>
        <TipsContainer orientation="left" height="140px">
          <TipsInfosContainer>
            <SectionTitle color={theme.colors.shape}>
              {texts.helps.help_3.title}
            </SectionTitle>
            <InfoText color={theme.colors.shape}>
              {texts.helps.help_3.text}
            </InfoText>
          </TipsInfosContainer>
          <IconContainer>
            <Image
              source={images.image3}
              style={{ tintColor: theme.colors.shape }}
            />
          </IconContainer>
        </TipsContainer>
        <TipsContainer height="200px">
          <IconContainer>
            <Image
              source={images.image4}
              style={{ tintColor: theme.colors.shape }}
            />
          </IconContainer>
          <TipsInfosContainer>
            <SectionTitle color={theme.colors.shape}>
              {texts.helps.help_4.title}
            </SectionTitle>
            <InfoText color={theme.colors.shape}>
              {texts.helps.help_4.text}
            </InfoText>
          </TipsInfosContainer>
        </TipsContainer>
      </ScrollView>
    </Container>
  );
}
