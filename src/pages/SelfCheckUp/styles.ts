import styled from 'styled-components/native';

interface QuestionContainerProps {
  focused: boolean;
}

interface Props {
  color?: string;
}

export const BackButton = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding-left: 10px;
`;

export const QuestionsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 15px;
`;

export const TextContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const QuestionContainer = styled.TouchableOpacity<QuestionContainerProps>`
  height: 60px;
  width: 150px;
  background-color: ${({ focused, theme }) =>
    focused ? theme.colors.secondary : theme.colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const QuestionText = styled.Text<Props>`
  color: ${({ color, theme }) => color || theme.colors.shape};
  margin-bottom: 0px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;
`;

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.View`
  margin: 20px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 10px;
  padding: 20px;
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
`;

export const HeaderContainer = styled.View`
  height: 10%;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const TipContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
`;
export const IconContainer = styled.View`
  height: 100%;
  width: 30%;
  align-items: center;
  justify-content: center;
`;

export const ModalButton = styled.TouchableOpacity`
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 10px 15px 10px 15px;
  margin-top: 10px;
`;
