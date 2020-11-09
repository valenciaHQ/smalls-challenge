import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { fetchTopPosts } from '../../actions/posts';

import PostDetail from '../PostDetail';
import PostList from '../PostList';
import FavoriteSwitch from '../FavoriteSwitch';

import { DetailContext } from '../../appContexts';
import { DEVICE_SIZE } from '../../constants';
import FavoritesList from '../FavoritesList';

const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export default () => {
  const dispatch = useDispatch();
  const [showDetailed, setShowDetailed] = useState();
  const { show: showFavorites } = useSelector((state) => state.favorites);

  const isTabletOrBigger = useMediaQuery({ minDeviceWidth: DEVICE_SIZE.tablet });
  const showDetailFor = (entity) => setShowDetailed(entity);

  useEffect(() => {
    dispatch(fetchTopPosts());
  }, [dispatch]);

  console.log('show favorites: ', showFavorites);
  return (
    <Container>
      <DetailContext.Provider value={{ entity: showDetailed, showDetailFor }}>
        <PostList isMobile={!isTabletOrBigger} />
        {showFavorites ? <FavoritesList /> : <PostDetail />}
        <FavoriteSwitch />
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
