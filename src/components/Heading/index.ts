import styled from 'styled-components/native';

interface Props {
  color?: string;
}

const Heading = styled.Text<Props>`
  color: ${({ theme, color }) => color || theme.colors.primary};
  font-size: 40px;
  margin-right: 8px;
  margin-left: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export default Heading;
