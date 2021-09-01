import styled from 'styled-components/native';

interface Props {
  color?: string;
}

const InfoText = styled.Text<Props>`
  color: ${({ theme, color }) => color || theme.colors.text};
  font-size: 16px;
  font-weight: normal;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-left: 20px;
`;

export default InfoText;
