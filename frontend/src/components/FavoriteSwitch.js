/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import Toggle from 'react-toggle';
import { useMediaQuery } from 'react-responsive';

import { DEVICE_SIZE } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { showFavorites } from '../actions/favorites';

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

export default () => {
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.favorites);

  const isTabletOrBigger = useMediaQuery({ minDeviceWidth: DEVICE_SIZE.tablet });
  const handleToogle = () => dispatch(showFavorites());

  return (
    <ToogleFavorites isMobile={isTabletOrBigger}>
      <Toggle defaultChecked={show} onChange={handleToogle} />
      <div>Toogle favorites</div>
    </ToogleFavorites>
  );
};
