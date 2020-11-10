import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { fetchFavorites } from '../actions/favorites';
import { FAVORITES_SERVICE_NOT_AVAILABLE, toastErrorId, TOAST_CONFIGURATION } from '../constants';
import Loading from './Loading';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  overflow: auto;
  height: 100vh;
`;

const Favorite = styled.div`
  display: flex;
  flex-flow: column;
  width: 300px;
  min-height: 100px;
  max-height: 150px;
  border: 1px solid ${(props) => props.theme.colors.orange};
  align-items: center;
  justify-content: space-around;
`;

const Entry = styled.div`
  margin: 5px;
`;

export default () => {
  const { data, isLoading, error, show } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [show, dispatch]);

  if (error) {
    toast.error(FAVORITES_SERVICE_NOT_AVAILABLE, { ...TOAST_CONFIGURATION, toastId: toastErrorId });
  }

  if (isLoading) {
    return (
      <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Loading size={50} loading />
      </Container>
    );
  }

  if (data && data.length === 0) {
    return (
      <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
        <p>Sorry! You don't have any favorites yet :(</p>
      </Container>
    );
  }

  return (
    <Container>
      <List>
        {data.map((fav) => (
          <Favorite>
            <Entry>{fav.title}</Entry>
            <Entry>{fav.author}</Entry>
          </Favorite>
        ))}
      </List>
    </Container>
  );
};
