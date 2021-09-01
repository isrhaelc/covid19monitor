import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.shape};
  padding-top: 40px;
`;

export default Container;
