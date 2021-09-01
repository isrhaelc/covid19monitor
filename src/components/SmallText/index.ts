import styled from 'styled-components/native';
interface Props {
  color: string;
}

const SmallText = styled.Text<Props>`
  color: ${({ color, theme }) => color || theme.colors.primary};
  font-size: 14px;
  margin-left: 10px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export default SmallText;
