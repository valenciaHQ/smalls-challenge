/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled, { css } from 'styled-components';
import Toggle from 'react-toggle';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { DEVICE_SIZE } from '../constants';

const ToogleFavorites = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
  text-align: end;
  z-index: 2;

  ${({ isMobile }) =>
    isMobile &&
    css`
      font-size: small;
    `}
`;

export default ({ handleToogle }) => {
  const { show } = useSelector((state) => state.favorites);

  const isTabletOrBigger = useMediaQuery({ minDeviceWidth: DEVICE_SIZE.tablet });

  return (
    <ToogleFavorites isMobile={isTabletOrBigger}>
      <Toggle defaultChecked={show} onChange={handleToogle} />
      <div>Toogle favorites</div>
    </ToogleFavorites>
  );
};
