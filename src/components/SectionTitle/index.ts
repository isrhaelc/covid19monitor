import styled from 'styled-components/native';

interface Props {
  color?: string;
}

const SubHeading = styled.Text<Props>`
  color: ${({ theme, color }) => color || theme.colors.primary};
  font-size: 18px;
  margin-left: 20px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export default SubHeading;
