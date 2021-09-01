import styled from 'styled-components/native';

export const SearchInput = styled.TextInput`
  width: 90%;
  height: 36px;
  padding-left: 15px;
  border-color: ${({ theme }) => theme.colors.text};
  border-width: 0.5px;
  align-self: center;
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const BackButton = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding-left: 10px;
`;
