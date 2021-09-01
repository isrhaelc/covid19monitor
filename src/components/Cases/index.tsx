import React from 'react';
import { ActivityIndicator } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import {
  CasesContainer,
  CasesCard,
  IconContainer,
  CaseNumberText,
  CaseNumberSubtitle,
} from './styles';
import { useTheme } from 'styled-components/native';

interface DataProps {
  confirmed: number;
  deaths: number;
}

interface Props {
  loading: boolean;
  data: DataProps;
}

export function Cases({ loading, data }: Props) {
  const theme = useTheme();

  return (
    <CasesContainer>
      <CasesCard>
        <IconContainer color={theme.colors.secondary_light}>
          <Icon name="plus" color={theme.colors.secondary} size={15} />
        </IconContainer>
        {loading ? (
          <ActivityIndicator color={theme.colors.secondary} />
        ) : (
          <CaseNumberText color={theme.colors.secondary}>
            {data.confirmed}
          </CaseNumberText>
        )}
        <CaseNumberSubtitle color={theme.colors.text}>
          Infectados
        </CaseNumberSubtitle>
      </CasesCard>
      <CasesCard>
        <IconContainer color={theme.colors.attention_light}>
          <Icon name="times" color={theme.colors.attention} size={15} />
        </IconContainer>
        {loading ? (
          <ActivityIndicator color={theme.colors.attention} />
        ) : (
          <CaseNumberText color={theme.colors.attention}>
            {data.deaths}
          </CaseNumberText>
        )}
        <CaseNumberSubtitle color={theme.colors.text}>
          Mortos
        </CaseNumberSubtitle>
      </CasesCard>
    </CasesContainer>
  );
}
