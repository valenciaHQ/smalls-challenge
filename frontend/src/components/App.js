import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import { fetchTopPosts } from '../actions/posts';
import PostDetail from './PostDetail';
import PostList from './PostList';
import { DetailContext } from '../appContexts';
import { DEVICE_SIZE } from '../constants';

const Container = styled.div`
  display: flex;
`;

export default () => {
  const [showDetailed, setShowDetailed] = useState();
  const dispatch = useDispatch();
  const isTabletOrBigger = useMediaQuery({ minDeviceWidth: DEVICE_SIZE.tablet });

  useEffect(() => {
    dispatch(fetchTopPosts());
  }, [dispatch]);

  const showDetailFor = (entity) => setShowDetailed(entity);

  return (
    <Container>
      <DetailContext.Provider value={{ entity: showDetailed, showDetailFor }}>
        <PostList isMobile={!isTabletOrBigger} />
        <PostDetail />
      </DetailContext.Provider>
    </Container>
  );
};
