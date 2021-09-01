import styled from 'styled-components/native';

interface Props {
  color?: string;
}

export const CasesContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const CasesCard = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 24%;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-color: ${({ theme }) => theme.colors.text};
  border-width: 0.2px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
`;

export const IconContainer = styled.View<Props>`
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-color: ${({ theme, color }) => color || theme.colors.primary};
  background-color: ${({ theme, color }) => color || theme.colors.primary};
  border-width: 1px;
  border-radius: 15px;
`;

export const CaseNumberText = styled.Text<Props>`
  color: ${({ theme, color }) => color || theme.colors.primary};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const CaseNumberSubtitle = styled.Text<Props>`
  color: ${({ theme, color }) => color || theme.colors.primary};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
