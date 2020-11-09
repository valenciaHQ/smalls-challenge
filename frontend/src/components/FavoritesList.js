import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { fetchFavorites } from '../actions/favorites';
import FavoriteSwitch from './FavoriteSwitch';
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
  const { data, isLoading, error } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, []);

  if (error) {
    toast.error('Your favs are not available  right now. Try again later!', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined
    });
  }

  if (isLoading) {
    return (
      <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Loading size={50} loading />
      </Container>
    );
  }

  if (data.length === 0) {
    return (
      <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
        <p>Sorry! You dont have favorites :(</p>
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
