import React, { useState, Suspense, lazy } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

import PostDetail from '../PostDetail';
import PostList from '../PostList';
import FavoriteSwitch from '../FavoriteSwitch';

import { DetailContext } from '../../appContexts';
import { DEVICE_SIZE } from '../../constants';
import Loading from '../Loading';
const FavoritesList = lazy(() => import('../FavoritesList'));

const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export default () => {
  const [showDetailed, setShowDetailed] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  const isTabletOrBigger = useMediaQuery({ minDeviceWidth: DEVICE_SIZE.tablet });
  const showDetailFor = (entity) => setShowDetailed(entity);
  const toogleShowFavorites = () => setShowFavorites(!showFavorites);

  return (
    <Container>
      <DetailContext.Provider value={{ entity: showDetailed, showDetailFor }}>
        <PostList isMobile={!isTabletOrBigger} />
        {showFavorites ? (
          <Suspense fallback={<Loading />}>
            <FavoritesList />
          </Suspense>
        ) : (
          <PostDetail />
        )}
        <FavoriteSwitch handleToogle={toogleShowFavorites} />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </DetailContext.Provider>
    </Container>
  );
};
