import styled from 'styled-components/native';

interface Props {
  height?: string;
  orientation?: 'left' | 'right';
}

export const TipsContainer = styled.View<Props>`
  width: 90%;
  height: ${({ height }) => (height ? height : '140px')};
  align-self: ${({ orientation }) =>
    orientation === 'left' ? 'flex-start' : 'flex-end'};
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom-left-radius: ${({ orientation }) =>
    orientation === 'left' ? '0px' : '10px'};
  border-top-left-radius: ${({ orientation }) =>
    orientation === 'left' ? '0px' : '10px'};
  border-top-right-radius: ${({ orientation }) =>
    orientation === 'left' ? '10px' : '0px'};
  border-bottom-right-radius: ${({ orientation }) =>
    orientation === 'left' ? '10px' : '0px'};
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
`;

export const IconContainer = styled.View`
  height: 100%;
  width: 30%;
  align-items: center;
  justify-content: center;
`;

export const TipsInfosContainer = styled.View`
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  width: 70%;
  padding-bottom: 10px;
  padding-top: 10px;
`;

export const DrawerButton = styled.TouchableOpacity`
  margin-left: 20px;
  height: 35px;
  width: 35px;
  background-color: ${({ theme }) => theme.colors.shape};
`;
