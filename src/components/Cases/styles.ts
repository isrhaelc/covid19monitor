import styled from 'styled-components/native';

interface Props {
  color: string;
}

export const CasesContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const CasesCard = styled.View`
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 45%;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-color: ${({ theme }) => theme.colors.text};
  border-width: 0.2px;
  padding: 10px;
  border-radius: 5px;
`;

export const IconContainer = styled.View<Props>`
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-color: ${({ color }) => color};
  background-color: ${({ color }) => color};
  border-width: 1px;
  border-radius: 15px;
`;

export const CaseNumberText = styled.Text<Props>`
  color: ${({ color }) => color};
  font-size: 26px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const CaseNumberSubtitle = styled.Text<Props>`
  color: ${({ color }) => color};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
`;
