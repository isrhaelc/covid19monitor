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
  image1: require('../../../assets/Images/TipsIcons/039-hand-wash.png'),
  image2: require('../../../assets/Images/TipsIcons/019-distance.png'),
  image3: require('../../../assets/Images/TipsIcons/040-not-touch.png'),
  image4: require('../../../assets/Images/TipsIcons/009-tissues.png'),
  image5: require('../../../assets/Images/TipsIcons/028-hospital.png'),
  image6: require('../../../assets/Images/TipsIcons/050-waste.png'),
  image7: require('../../../assets/Images/TipsIcons/026-warning.png'),
  image8: require('../../../assets/Images/TipsIcons/029-stayhome.png'),
};

export function Prevent() {
  const theme = useTheme();

  return (
    <Container>
      <Heading>Dicas</Heading>
      <SubHeading>Algumas dicas que podem lhe ajudar</SubHeading>
      <ScrollView>
        <TipsContainer orientation="left" height="110px">
          <TipsInfosContainer>
            <SectionTitle color={theme.colors.shape}>
              {'Fique em Casa'}
            </SectionTitle>
            <InfoText color={theme.colors.shape}>{texts.tips.tip_7}</InfoText>
          </TipsInfosContainer>
          <IconContainer>
            <Image
              source={images.image8}
              style={{ tintColor: theme.colors.shape }}
            />
          </IconContainer>
        </TipsContainer>
        <TipsContainer height="130px">
          <IconContainer>
            <Image
              source={images.image1}
              style={{ tintColor: theme.colors.shape }}
            />
          </IconContainer>
          <TipsInfosContainer>
            <SectionTitle color={theme.colors.shape}>
              {'Limpe suas Mãos'}
            </SectionTitle>
            <InfoText color={theme.colors.shape}>{texts.tips.tip_1}</InfoText>
          </TipsInfosContainer>
        </TipsContainer>
        <TipsContainer orientation="left" height="130px">
          <TipsInfosContainer>
            <SectionTitle color={theme.colors.shape}>
              {'Evite Contato'}
            </SectionTitle>
            <InfoText color={theme.colors.shape}>{texts.tips.tip_2}</InfoText>
          </TipsInfosContainer>
          <IconContainer>
            <Image
              source={images.image2}
              style={{ tintColor: theme.colors.shape }}
            />
          </IconContainer>
        </TipsContainer>
        <TipsContainer height="110px">
          <IconContainer>
            <Image
              source={images.image3}
              style={{ tintColor: theme.colors.shape }}
            />
          </IconContainer>
          <TipsInfosContainer>
            <SectionTitle color={theme.colors.shape}>
              {'Fique Atento'}
            </SectionTitle>
            <InfoText color={theme.colors.shape}>{texts.tips.tip_3}</InfoText>
          </TipsInfosContainer>
        </TipsContainer>
        <TipsContainer orientation="left" height="150px">
          <TipsInfosContainer>
            <SectionTitle color={theme.colors.shape}>
              {'Cuidados Adicionais'}
            </SectionTitle>
            <InfoText color={theme.colors.shape}>{texts.tips.tip_4}</InfoText>
          </TipsInfosContainer>
          <IconContainer>
            <Image
              source={images.image4}
              style={{ tintColor: theme.colors.shape }}
            />
          </IconContainer>
        </TipsContainer>
        <TipsContainer>
          <IconContainer>
            <Image
              source={images.image6}
              style={{ tintColor: theme.colors.shape }}
            />
          </IconContainer>
          <TipsInfosContainer>
            <SectionTitle color={theme.colors.shape}>
              {'Melhore a Limpeza'}
            </SectionTitle>
            <InfoText color={theme.colors.shape}>{texts.tips.tip_5}</InfoText>
          </TipsInfosContainer>
        </TipsContainer>
        <TipsContainer orientation="left" height="100px">
          <TipsInfosContainer>
            <SectionTitle color={theme.colors.shape}>
              {'Evite Compartilhar'}
            </SectionTitle>
            <InfoText color={theme.colors.shape}>{texts.tips.tip_6}</InfoText>
          </TipsInfosContainer>
          <IconContainer>
            <Image
              source={images.image7}
              style={{ tintColor: theme.colors.shape }}
            />
          </IconContainer>
        </TipsContainer>
      </ScrollView>
    </Container>
  );
}
