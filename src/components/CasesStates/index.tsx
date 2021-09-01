import React from 'react';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import {
  CasesContainer,
  CasesCard,
  IconContainer,
  CaseNumberText,
  CaseNumberSubtitle,
} from './styles';
import { useTheme } from 'styled-components/native';

interface Props {
  data: {
    cases: number;
    suspects: number;
    refuses: number;
    deaths: number;
  };
}

export function CasesStates({ data }: Props) {
  const theme = useTheme();

  return (
    <CasesContainer>
      <CasesCard>
        <IconContainer color={theme.colors.secondary_light}>
          <Icon name="plus" color={theme.colors.secondary} size={15} />
        </IconContainer>
        <CaseNumberText color={theme.colors.secondary}>
          {data.cases}
        </CaseNumberText>
        <CaseNumberSubtitle color={theme.colors.text}>
          Infectados
        </CaseNumberSubtitle>
      </CasesCard>
      <CasesCard>
        <IconContainer color={theme.colors.yellow_light}>
          <Icon name="exclamation" color={theme.colors.yellow} size={15} />
        </IconContainer>
        <CaseNumberText color={theme.colors.yellow}>
          {data.suspects}
        </CaseNumberText>
        <CaseNumberSubtitle color={theme.colors.text}>
          Suspeitos
        </CaseNumberSubtitle>
      </CasesCard>
      <CasesCard>
        <IconContainer color={theme.colors.blue_light}>
          <Icon name="heart" color={theme.colors.blue} size={15} />
        </IconContainer>
        <CaseNumberText color={theme.colors.blue}>
          {data.refuses}
        </CaseNumberText>
        <CaseNumberSubtitle color={theme.colors.text}>
          Descartados
        </CaseNumberSubtitle>
      </CasesCard>
      <CasesCard>
        <IconContainer color={theme.colors.attention_light}>
          <Icon name="times" color={theme.colors.attention} size={15} />
        </IconContainer>
        <CaseNumberText color={theme.colors.attention}>
          {data.deaths}
        </CaseNumberText>
        <CaseNumberSubtitle color={theme.colors.text}>
          Mortos
        </CaseNumberSubtitle>
      </CasesCard>
    </CasesContainer>
  );
}
