import styled from 'styled-components/native';

export const SelfCheckUpContainer = styled.TouchableOpacity`
  width: 90%;
  height: 120px;
  align-self: flex-end;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  margin-top: 20px;
  align-items: center;
`;

export const SelfCheckUpInfosContainer = styled.View`
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  width: 80%;
  margin-right: 20px;
  padding-bottom: 20px;
  padding-top: 10px;
`;

export const ActionsContainer = styled.TouchableOpacity`
  width: 90%;
  height: 70px;
  align-self: flex-end;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
  padding-right: 30px;
`;

export const DrawerButton = styled.TouchableOpacity`
  margin-left: 20px;
  height: 35px;
  width: 35px;
  background-color: ${({ theme }) => theme.colors.shape};
`;
