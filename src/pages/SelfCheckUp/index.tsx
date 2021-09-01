/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { ToastAndroid, Modal } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import Container from '../../components/Container';
import Heading from '../../components/Heading';
import SubHeading from '../../components/SubHeading';
import SectionTitle from '../../components/SectionTitle';
import InfoText from '../../components/InfoText';
import SmallText from '../../components/SmallText';

import texts from '../../constants/texts';

const images = {
  hospital: require('../../../assets/Images/TipsIcons/028-hospital.png'),
  warning: require('../../../assets/Images/TipsIcons/026-warning.png'),
  home: require('../../../assets/Images/TipsIcons/029-stayhome.png'),
};

import {
  QuestionsContainer,
  QuestionContainer,
  QuestionText,
  TextContainer,
  BackButton,
  CenteredView,
  ModalView,
  Image,
  IconContainer,
  HeaderContainer,
  TipContainer,
  ModalButton,
} from './styles';
import { useTheme } from 'styled-components/native';

const popAction = StackActions.pop(1);
const popBack = StackActions.popToTop();

export function SelfCheckUp() {
  const [symptoms, setSymptoms] = useState<String[]>([]);
  const [othersSymptoms, setOthersSymptoms] = useState<String[]>([]);
  const [diseases, setDiseases] = useState<String[]>([]);
  const [symptomsTime, setSymptomsTime] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [errorsStep1, setErrorsStep1] = useState(false);
  const [errorsStep2, setErrorsStep2] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState('');

  const navigation = useNavigation();
  const theme = useTheme();

  function handleClick(type: string, value: string) {
    if (type === 'symptoms') {
      if (!symptoms.includes(value) || symptoms.length === 0) {
        if (value === 'no_symptom') {
          setSymptoms([value]);
        } else if (symptoms.includes('no_symptom')) {
          const newSymptoms = symptoms.filter((item) => item !== 'no_symptom');
          setSymptoms([...newSymptoms, value]);
        } else {
          setSymptoms([...symptoms, value]);
        }
      } else {
        setSymptoms(symptoms.filter((item) => item !== value));
      }
    } else if (type === 'symptomsTime') {
      setSymptomsTime(value);
    } else if (type === 'age') {
      setAge(value);
    } else if (type === 'gender') {
      setGender(value);
    } else if (type === 'diseases') {
      if (!diseases.includes(value) || diseases.length === 0) {
        if (value === 'no_diseases') {
          setDiseases([value]);
        } else if (diseases.includes('no_diseases')) {
          const newDiseases = symptoms.filter((item) => item !== 'no_diseases');
          setDiseases([...newDiseases, value]);
        } else {
          setDiseases([...diseases, value]);
        }
      } else {
        setDiseases(diseases.filter((item) => item !== value));
      }
    } else if (type === 'otherSymptoms') {
      if (!othersSymptoms.includes(value) || othersSymptoms.length === 0) {
        if (value === 'no_otherSymptoms') {
          setOthersSymptoms([value]);
        } else if (othersSymptoms.includes('no_otherSymptoms')) {
          const newothersSymptoms = symptoms.filter(
            (item) => item !== 'no_otherSymptoms'
          );
          setOthersSymptoms([...newothersSymptoms, value]);
        } else {
          setOthersSymptoms([...diseases, value]);
          othersSymptoms.push(value);
        }
      } else {
        setOthersSymptoms(othersSymptoms.filter((item) => item !== value));
      }
    }
  }

  function submitFirstStep() {
    if (symptoms.length > 0 && symptomsTime !== '') {
      setErrorsStep1(false);
    } else {
      ToastAndroid.showWithGravity(
        'Todas as perguntas devem ser respondidas.',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      setErrorsStep1(true);
    }
  }

  function submitSecondStep() {
    if (age !== '' && gender !== '') {
      setErrorsStep2(false);
    } else {
      ToastAndroid.showWithGravity(
        'Todas as perguntas devem ser respondidas.',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      setErrorsStep2(true);
    }
  }

  function submitSelfCheckUp() {
    if (
      symptoms.includes('symptom_1') ||
      (symptoms.length >= 2 && age === 'age_3') ||
      (!symptoms.includes('no_symptom') &&
        (age === 'age_2' || age === 'age_3') &&
        diseases.length === 4 &&
        othersSymptoms.length > 0)
    ) {
      setEvaluationResult('urgent');
    } else if (
      symptoms.length > 2 &&
      (age === 'age_2' || age === 'age_3') &&
      diseases.length > 0 &&
      othersSymptoms.length > 0
    ) {
      setEvaluationResult('probable');
    } else if (
      symptoms.length > 2 &&
      symptomsTime !== 'symptomsTime_3' &&
      diseases.length > 0 &&
      othersSymptoms.length > 0
    ) {
      setEvaluationResult('household');
    } else {
      setEvaluationResult('improbable');
    }

    setModalVisible(true);
  }

  function handleResult() {
    switch (evaluationResult) {
      case 'urgent':
        return buildUrgentCase();
      case 'probable':
        return buildProbableCase();
      case 'household':
        return buildHouseholdIsolation();
      case 'improbable':
        return buildImprobableCase();

      default:
        break;
    }
  }

  function buildUrgentCase() {
    return (
      <>
        <HeaderContainer>
          <IconContainer>
            <Image
              source={images.hospital}
              style={{ tintColor: theme.colors.attention }}
            />
          </IconContainer>
          <Heading>Urgência</Heading>
        </HeaderContainer>
        <InfoText>{texts.urgentCase.description}</InfoText>
        <InfoText color={theme.colors.primary}>
          {texts.urgentCase.information}
        </InfoText>
        <SmallText color={theme.colors.primary}>
          {texts.urgentCase.tipsTitle}
        </SmallText>
        {texts.urgentCase.tips.map((tip) => (
          <TipContainer key={tip}>
            <Icon name="check" color={theme.colors.success} size={15} />
            <SmallText color={theme.colors.text}>{tip}</SmallText>
          </TipContainer>
        ))}
        <ModalButton onPress={finishButton}>
          <SectionTitle color={theme.colors.shape}>Finalizar</SectionTitle>
        </ModalButton>
      </>
    );
  }

  function buildProbableCase() {
    return (
      <>
        <HeaderContainer>
          <IconContainer>
            <Image
              source={images.warning}
              style={{ tintColor: theme.colors.secondary }}
            />
          </IconContainer>
          <Heading>Provável</Heading>
        </HeaderContainer>
        <InfoText color={theme.colors.primary}>
          {texts.probableCase.description}
        </InfoText>
        <InfoText color={theme.colors.primary}>
          {texts.probableCase.information}
        </InfoText>
        <SmallText color={theme.colors.primary}>
          {texts.probableCase.tipsTitle}
        </SmallText>
        {texts.probableCase.tips.map((tip) => (
          <TipContainer key={tip}>
            <Icon name="check" color={theme.colors.success} size={15} />
            <SmallText color={theme.colors.text}>{tip}</SmallText>
          </TipContainer>
        ))}
        <ModalButton onPress={finishButton}>
          <SectionTitle color={theme.colors.shape}>Finalizar</SectionTitle>
        </ModalButton>
      </>
    );
  }

  function buildImprobableCase() {
    return (
      <>
        <HeaderContainer>
          <IconContainer>
            <Image
              source={images.home}
              style={{ tintColor: theme.colors.blue }}
            />
          </IconContainer>
          <Heading>Improvável</Heading>
        </HeaderContainer>
        <InfoText color={theme.colors.primary}>
          {texts.improbableCase.description}
        </InfoText>
        <InfoText color={theme.colors.primary}>
          {texts.improbableCase.information}
        </InfoText>
        <SmallText color={theme.colors.primary}>
          {texts.improbableCase.tipsTitle}
        </SmallText>
        {texts.improbableCase.tips.map((tip) => (
          <TipContainer key={tip}>
            <Icon name="check" color={theme.colors.success} size={15} />
            <SmallText color={theme.colors.text}>{tip}</SmallText>
          </TipContainer>
        ))}
        <ModalButton onPress={finishButton}>
          <SectionTitle color={theme.colors.shape}>Finalizar</SectionTitle>
        </ModalButton>
      </>
    );
  }

  function buildHouseholdIsolation() {
    return (
      <>
        <HeaderContainer>
          <IconContainer>
            <Image
              source={images.home}
              style={{ tintColor: theme.colors.yellow }}
            />
          </IconContainer>
          <SubHeading>Isolamento Domiciliar</SubHeading>
        </HeaderContainer>
        <InfoText color={theme.colors.primary}>
          {texts.householdIsolation.description}
        </InfoText>
        <InfoText color={theme.colors.primary}>
          {texts.householdIsolation.information}
        </InfoText>
        <SmallText color={theme.colors.primary}>
          {texts.householdIsolation.tipsTitle}
        </SmallText>
        {texts.householdIsolation.tips.map((tip) => (
          <TipContainer key={tip}>
            <Icon name="check" color={theme.colors.success} size={15} />
            <SmallText color={theme.colors.text}>{tip}</SmallText>
          </TipContainer>
        ))}
        <ModalButton onPress={finishButton}>
          <SectionTitle color={theme.colors.shape}>Finalizar</SectionTitle>
        </ModalButton>
      </>
    );
  }

  function finishButton() {
    setModalVisible(false);
    navigation.dispatch(popBack);
  }
  return (
    <Container>
      <BackButton onPress={() => navigation.dispatch(popAction)}>
        <Icon name="chevron-left" color={theme.colors.primary} size={20} />
        <Heading>{'Auto Avaliação'}</Heading>
      </BackButton>
      <SubHeading>
        {'Descubra se seus sintomas são compatíveis com a COVID-19'}
      </SubHeading>
      <ProgressSteps
        activeStepIconBorderColor={theme.colors.primary}
        completedProgressBarColor={theme.colors.secondary}
        completedStepIconColor={theme.colors.secondary}
        labelColor={theme.colors.text}
        activeLabelColor={theme.colors.primary}
      >
        <ProgressStep
          onNext={submitFirstStep}
          errors={errorsStep1}
          label="Sintomas"
          nextBtnText="Próximo"
          nextBtnTextStyle={{
            color: theme.colors.primary,
          }}
        >
          <QuestionsContainer>
            <TextContainer>
              <QuestionText color={theme.colors.primary}>
                Quais sintomas está sentindo?
              </QuestionText>
            </TextContainer>
            <QuestionContainer
              focused={symptoms.includes('symptom_1')}
              onPress={() => handleClick('symptoms', 'symptom_1')}
            >
              <QuestionText>Dificuldade de Respirar</QuestionText>
            </QuestionContainer>
            <QuestionContainer
              focused={symptoms.includes('symptom_2')}
              onPress={() => handleClick('symptoms', 'symptom_2')}
            >
              <QuestionText>Dor de Garganta</QuestionText>
            </QuestionContainer>
            <QuestionContainer
              focused={symptoms.includes('symptom_3')}
              onPress={() => handleClick('symptoms', 'symptom_3')}
            >
              <QuestionText>Febre</QuestionText>
            </QuestionContainer>
            <QuestionContainer
              focused={symptoms.includes('symptom_4')}
              onPress={() => handleClick('symptoms', 'symptom_4')}
            >
              <QuestionText>Tosse</QuestionText>
            </QuestionContainer>
            <QuestionContainer
              focused={symptoms.includes('no_symptom')}
              onPress={() => handleClick('symptoms', 'no_symptom')}
            >
              <QuestionText>Nenhum desses Sintomas</QuestionText>
            </QuestionContainer>
          </QuestionsContainer>
          <QuestionsContainer>
            <TextContainer>
              <QuestionText color={theme.colors.primary}>
                Há quanto tempo os sente?
              </QuestionText>
            </TextContainer>
            <QuestionContainer
              focused={symptomsTime === 'symptomsTime_1' ? true : false}
              onPress={() => handleClick('symptomsTime', 'symptomsTime_1')}
            >
              <QuestionText>1 a 7 dias(s)</QuestionText>
            </QuestionContainer>
            <QuestionContainer
              focused={symptomsTime === 'symptomsTime_2' ? true : false}
              onPress={() => handleClick('symptomsTime', 'symptomsTime_2')}
            >
              <QuestionText>8 a 14 dais(s)</QuestionText>
            </QuestionContainer>
            <QuestionContainer
              focused={symptomsTime === 'symptomsTime_3' ? true : false}
              onPress={() => handleClick('symptomsTime', 'symptomsTime_3')}
            >
              <QuestionText>Hoje</QuestionText>
            </QuestionContainer>
            <QuestionContainer
              focused={symptomsTime === 'symptomsTime_4' ? true : false}
              onPress={() => handleClick('symptomsTime', 'symptomsTime_4')}
            >
              <QuestionText>Mais de 14 dias(s)</QuestionText>
            </QuestionContainer>
          </QuestionsContainer>
        </ProgressStep>
        <ProgressStep
          onNext={submitSecondStep}
          errors={errorsStep2}
          label="Identificação"
          nextBtnText="Próximo"
          previousBtnText="Anterior"
          nextBtnTextStyle={{
            color: theme.colors.primary,
          }}
          previousBtnTextStyle={{
            color: theme.colors.primary,
          }}
        >
          <QuestionsContainer>
            <TextContainer>
              <QuestionText color={theme.colors.primary}>
                Qual a sua idade?
              </QuestionText>
            </TextContainer>
            <QuestionContainer
              focused={age === 'age_1' ? true : false}
              onPress={() => handleClick('age', 'age_1')}
            >
              <QuestionText>18 a 39 anos</QuestionText>
            </QuestionContainer>
            <QuestionContainer
              focused={age === 'age_2' ? true : false}
              onPress={() => handleClick('age', 'age_2')}
            >
              <QuestionText>40 a 59 anos</QuestionText>
            </QuestionContainer>
            <QuestionContainer
              focused={age === 'age_3' ? true : false}
              onPress={() => handleClick('age', 'age_3')}
            >
              <QuestionText>Mais de 60 anos</QuestionText>
            </QuestionContainer>
            <QuestionContainer
              focused={age === 'age_4' ? true : false}
              onPress={() => handleClick('age', 'age_4')}
            >
              <QuestionText>Menor de 18 anos</QuestionText>
            </QuestionContainer>
          </QuestionsContainer>
          <QuestionsContainer>
            <TextContainer>
              <QuestionText color={theme.colors.primary}>
                Qual é seu sexo?
              </QuestionText>
            </TextContainer>
            <QuestionContainer
              focused={gender === 'gender_1' ? true : false}
              onPress={() => handleClick('gender', 'gender_1')}
            >
              <QuestionText>Masculino</QuestionText>
            </QuestionContainer>
            <QuestionContainer
              focused={gender === 'gender_2' ? true : false}
              onPress={() => handleClick('gender', 'gender_2')}
            >
              <QuestionText>Feminino</QuestionText>
            </QuestionContainer>
          </QuestionsContainer>
        </ProgressStep>
        <ProgressStep
          onSubmit={submitSelfCheckUp}
          label="Sua Saúde"
          finishBtnText="Finalizar"
          previousBtnText="Anterior"
          nextBtnTextStyle={{
            color: theme.colors.primary,
          }}
          previousBtnTextStyle={{
            color: theme.colors.primary,
          }}
        >
          <QuestionsContainer>
            <TextContainer>
              <QuestionText color={theme.colors.primary}>
                Possui alguma dessas doenças?
              </QuestionText>
            </TextContainer>
            <QuestionContainer
              focused={diseases.includes('diseases_1')}
              onPress={() => handleClick('diseases', 'diseases_1')}
            >
              <QuestionText>Diabetes</QuestionText>
            </QuestionContainer>
            <QuestionContainer
              focused={diseases.includes('diseases_2')}
              onPress={() => handleClick('diseases', 'diseases_2')}
            >
              <QuestionText>Doença Renal Crônica</QuestionText>
            </QuestionContainer>
            <QuestionContainer
              focused={diseases.includes('diseases_3')}
              onPress={() => handleClick('diseases', 'diseases_3')}
            >
              <QuestionText>Doença Respiratória Crônica</QuestionText>
            </QuestionContainer>
            <QuestionContainer
              focused={diseases.includes('diseases_5')}
              onPress={() => handleClick('diseases', 'diseases_5')}
            >
              <QuestionText>Pressão Alta</QuestionText>
            </QuestionContainer>
            <QuestionContainer
              focused={diseases.includes('no_diseases')}
              onPress={() => handleClick('diseases', 'no_diseases')}
            >
              <QuestionText>Não Possuo</QuestionText>
            </QuestionContainer>
          </QuestionsContainer>
          <QuestionsContainer>
            <TextContainer>
              <QuestionText color={theme.colors.primary}>
                Outros sinais ou/e sintomas?
              </QuestionText>
            </TextContainer>
            <QuestionContainer
              focused={othersSymptoms.includes('otherSymptoms_1')}
              onPress={() => handleClick('otherSymptoms', 'otherSymptoms_1')}
            >
              <QuestionText>Boca ou ponta dos dedos roxa</QuestionText>
            </QuestionContainer>
            <QuestionContainer
              focused={othersSymptoms.includes('otherSymptoms_3')}
              onPress={() => handleClick('otherSymptoms', 'otherSymptoms_3')}
            >
              <QuestionText>Palidez</QuestionText>
            </QuestionContainer>
            <QuestionContainer
              focused={othersSymptoms.includes('otherSymptoms_4')}
              onPress={() => handleClick('otherSymptoms', 'otherSymptoms_4')}
            >
              <QuestionText>Pressão baixa</QuestionText>
            </QuestionContainer>
            <QuestionContainer
              focused={othersSymptoms.includes('otherSymptoms_5')}
              onPress={() => handleClick('otherSymptoms', 'otherSymptoms_5')}
            >
              <QuestionText>Respirando muito rápido</QuestionText>
            </QuestionContainer>
            <QuestionContainer
              focused={othersSymptoms.includes('otherSymptoms_6')}
              onPress={() => handleClick('otherSymptoms', 'otherSymptoms_6')}
            >
              <QuestionText>Sensação de desmaio</QuestionText>
            </QuestionContainer>
            <QuestionContainer
              focused={othersSymptoms.includes('no_otherSymptoms')}
              onPress={() => handleClick('otherSymptoms', 'no_otherSymptoms')}
            >
              <QuestionText>Nenhum desses sintomas</QuestionText>
            </QuestionContainer>
          </QuestionsContainer>
        </ProgressStep>
      </ProgressSteps>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <CenteredView>
          <ModalView>{handleResult()}</ModalView>
        </CenteredView>
      </Modal>
    </Container>
  );
}
