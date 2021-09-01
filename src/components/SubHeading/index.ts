import styled from 'styled-components/native';

interface Props {
  color?: string;
}

const SubHeading = styled.Text<Props>`
  color: ${({ theme, color }) => color || theme.colors.primary};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-left: 20px;
`;

export default SubHeading;
