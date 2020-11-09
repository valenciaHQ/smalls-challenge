/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext, useState } from 'react';
import moment from 'moment';
import isUrl from 'is-url';
import { useDispatch } from 'react-redux';
import { deleteFavorite, getFavorite, saveFavorite } from '../../actions/favorites';

import Dismiss from '../Dismiss';

import {
  Container,
  Header,
  ThumbNailWrapper,
  Thumbnail,
  Footer,
  Dot,
  Title,
  AuthorWrapper,
  Column,
  FilledHeart,
  EmptyHeart
} from './styled';
import { DetailContext } from '../../appContexts';
import { SET_READED, DISMISS_POST } from '../../constants';

const Post = ({ data, dismissed }) => {
  const dispatch = useDispatch();
  const { id, title, author, created, thumbnail, readed } = data;
  const { entity, showDetailFor } = useContext(DetailContext);
  const [isDismissed, setIsDismissed] = useState(dismissed);

  const handleReadClick = () => {
    showDetailFor({ id, title, author, thumbnail });
    dispatch({ type: SET_READED, payload: id });
  };

  const handleToogleFavorite = () => {
    if (getFavorite(id)) {
      dispatch(deleteFavorite(id));
    }
    dispatch(saveFavorite({ PostId: id, Title: title, Author: author }));
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    setTimeout(() => {
      dispatch({ type: DISMISS_POST, payload: id });
      if (entity && entity.id === id) showDetailFor(null);
    }, 600);
  };

  const timeFromNow = moment(created * 1000).fromNow();

  return (
    <Container dismissed={isDismissed}>
      <Header>
        <Column style={{ marginRight: '10px' }}>
          {true ? (
            <EmptyHeart onClick={handleToogleFavorite} />
          ) : (
            <FilledHeart onClick={handleToogleFavorite} />
          )}
          <Dot readed={readed} />
        </Column>
        <Column>
          <Title>{title}</Title>
        </Column>
      </Header>
      {isUrl(thumbnail) && (
        <ThumbNailWrapper onClick={handleReadClick}>
          <Thumbnail src={thumbnail} alt="thumbnail" />
        </ThumbNailWrapper>
      )}
      <Footer>
        <Dismiss onClick={handleDismiss}>Dismiss</Dismiss>
        <AuthorWrapper>
          by {author} · {timeFromNow}
        </AuthorWrapper>
      </Footer>
    </Container>
  );
};

export default React.memo(Post);
