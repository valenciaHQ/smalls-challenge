/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Post from '../Post';
import Dismiss from '../Dismiss';
import LoadMore from '../LoadMore';
import Loading from '../Loading';

import { DISMISS_ALL } from '../../constants';
import { DetailContext } from '../../appContexts';
import {
  ArrowRight,
  ArrowLeft,
  Container,
  Title,
  ListWrapper,
  LoadingWrapper,
  ToogleMenuContainer
} from './styled';
import { fetchTopPosts } from '../../actions/posts';

const PostList = ({ isMobile }) => {
  const { data, isLoading, allDismissed } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { showDetailFor } = useContext(DetailContext);

  const [showList, setShowList] = useState(!isMobile);

  useEffect(() => {
    dispatch(fetchTopPosts());
  }, [dispatch]);

  useEffect(() => {
    setShowList(!isMobile);
  }, [isMobile]);

  const handleClick = () => {
    dispatch({ type: DISMISS_ALL });
    showDetailFor(null);
  };

  const toogleMenu = () => setShowList(!showList);
  const handleOpenMenu = () => toogleMenu(true);

  if (!showList) {
    return (
      <ToogleMenuContainer>
        <ArrowRight onClick={handleOpenMenu} />
      </ToogleMenuContainer>
    );
  }

  return (
    showList && (
      <>
        <Container isMobile={isMobile}>
          <Title>
            <u>/r/all</u> Top 50 Posts
          </Title>
          <ListWrapper>
            {data.map((post) => (
              <Post key={post.id} data={post} dismissed={allDismissed} />
            ))}
            {isLoading ? (
              <LoadingWrapper>
                <Loading size={20} loading={isLoading} />
              </LoadingWrapper>
            ) : (
              <LoadMore />
            )}
          </ListWrapper>
          <Dismiss onClick={handleClick} fixed>
            Dismiss all
          </Dismiss>
        </Container>
        {isMobile && (
          <ToogleMenuContainer open>
            <ArrowLeft onClick={handleOpenMenu} />
          </ToogleMenuContainer>
        )}
      </>
    )
  );
};

export default React.memo(PostList);
