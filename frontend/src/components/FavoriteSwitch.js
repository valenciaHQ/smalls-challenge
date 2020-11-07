/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import Toggle from 'react-toggle';
import { useMediaQuery } from 'react-responsive';

import { FavoritesContext } from '../appContexts';
import { DEVICE_SIZE } from '../constants';

const ToogleFavorites = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
  text-align: end;

  ${({ isMobile }) =>
    isMobile &&
    css`
      font-size: small;
    `}
`;

export default () => {
  const { show, toogleFavorites } = useContext(FavoritesContext);
  const isTabletOrBigger = useMediaQuery({ minDeviceWidth: DEVICE_SIZE.tablet });

  return (
    <ToogleFavorites isMobile={isTabletOrBigger}>
      <Toggle defaultChecked={show} onChange={toogleFavorites} />
      <div>Toogle favorites</div>
    </ToogleFavorites>
  );
};
