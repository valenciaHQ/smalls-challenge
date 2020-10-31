import styled, { css } from 'styled-components';
import Arrow from '../Arrow';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  border: 1px solid;

  ${({ isMobile }) =>
    isMobile &&
    css`
      position: absolute;
      left: 0px;
      z-index: 2;
      width: 60%;
      background: ${(props) => props.theme.colors.black};
    `}
`;

export const Title = styled.h3`
  text-align: center;
  border-bottom: 1px solid white;
  padding-bottom: 1rem;
`;

export const ListWrapper = styled.div`
  height: 100vh;
  flex-direction: column;
  overflow-y: auto;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const ArrowRight = styled(Arrow)`
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

export const ArrowLeft = styled(Arrow)`
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

export const ToogleMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 0 10px;

  ${({ open }) =>
    open &&
    css`
      position: absolute;
      z-index: 3;
      margin-left: 60%;
    `}
`;
