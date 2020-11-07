import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import { fetchFavorites } from '../../actions/favorites';
import { fetchTopPosts } from '../../actions/posts';

import PostDetail from '../PostDetail';
import PostList from '../PostList';

import { DetailContext, FavoritesContext } from '../../appContexts';
import { DEVICE_SIZE } from '../../constants';
import FavoritesList from '../FavoritesList';

const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export default () => {
  const [showDetailed, setShowDetailed] = useState();
  const [showFavorites, setShowFavorites] = useState(false);
  const dispatch = useDispatch();
  const isTabletOrBigger = useMediaQuery({ minDeviceWidth: DEVICE_SIZE.tablet });

  useEffect(() => {
    dispatch(fetchTopPosts());
  }, [dispatch]);

  const showDetailFor = (entity) => setShowDetailed(entity);
  const toogleFavorites = () => setShowFavorites(!showFavorites);

  return (
    <Container>
      <DetailContext.Provider value={{ entity: showDetailed, showDetailFor }}>
        <FavoritesContext.Provider value={{ show: showFavorites, toogleFavorites }}>
          <PostList isMobile={!isTabletOrBigger} />
          {showFavorites ? <FavoritesList /> : <PostDetail />}
        </FavoritesContext.Provider>
      </DetailContext.Provider>
    </Container>
  );
};
