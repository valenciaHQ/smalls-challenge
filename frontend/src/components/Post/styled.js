/* eslint-disable no-confusing-arrow */
import styled, { css, keyframes } from 'styled-components';
import { HeartCircle, Heart } from '@styled-icons/boxicons-regular';
import { DEVICE } from '../../constants';

const fadeOut = keyframes`
  from {
    opacity: 1
  }

  to {
    opacity: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  border-bottom: 1px solid white;

  visibility: ${(props) => (props.dismissed ? 'hidden' : 'visible')};
  animation: ${(props) => props.dismissed && fadeOut} 0.5s ease-out;
  transition: visibility 0.5s ease-out;
`;

export const Header = styled.div`
  @media ${DEVICE.mobileS} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    text-align: center;
  }

  @media ${DEVICE.laptop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Footer = styled.div`
  @media ${DEVICE.mobileS} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media ${DEVICE.laptop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ThumbNailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

export const Thumbnail = styled.img`
  @media ${DEVICE.mobileS} {
    display: block;
    max-width: 100px;
    max-height: 50px;
    width: auto;
    height: auto;
  }

  @media ${DEVICE.tablet} {
    display: block;
    max-width: 400px;
    max-height: 200px;
    width: auto;
    height: auto;
  }
`;

const headerIconProps = css`
  @media ${DEVICE.tablet} {
    height: 25px;
    width: 25px;
  }

  @media ${DEVICE.mobiles} {
    height: 15px;
    width: 15px;
    align-self: center;
  }
`;

const favIcon = css`
  margin-bottom: 8px;
  :hover {
    cursor: pointer;
  }
`;

export const FilledHeart = styled(HeartCircle)`
  ${headerIconProps};
  ${favIcon};
`;

export const EmptyHeart = styled(Heart)`
  ${headerIconProps};
  ${favIcon};
`;

export const Dot = styled.div`
  ${headerIconProps};
  border-radius: 50%;
  display: inline-block;
  background-color: ${(props) => (props.readed ? props.theme.colors.red : props.theme.colors.blue)};
`;

export const Title = styled.h5`
  text-align: center;
  max-width: 90%;
`;

export const AuthorWrapper = styled.p``;

export const Column = styled.div`
  display: flex;
  flex-flow: column wrap;
`;
