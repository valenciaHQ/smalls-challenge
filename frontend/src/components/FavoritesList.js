import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchFavorites } from '../actions/favorites';
import FavoriteSwitch from './FavoriteSwitch';

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

const mock = [
  { title: 'asdasdasdasdasd', author: 'lalalalalalalala' },
  { title: 'asdasdasdasdasd', author: 'lalalalalalalala' },
  { title: 'asdasdasdasdasd', author: 'lalalalalalalala' },
  { title: 'asdasdasdasdasd', author: 'lalalalalalalala' },
  { title: 'asdasdasdasdasd', author: 'lalalalalalalala' },
  { title: 'asdasdasdasdasd', author: 'lalalalalalalala' },
  { title: 'asdasdasdasdasd', author: 'lalalalalalalala' },
  { title: 'asdasdasdasdasd', author: 'lalalalalalalala' },
  { title: 'asdasdasdasdasd', author: 'lalalalalalalala' },
  { title: 'asdasdasdasdasd', author: 'lalalalalalalala' },
  { title: 'asdasdasdasdasd', author: 'lalalalalalalala' },
  { title: 'asdasdasdasdasd', author: 'lalalalalalalala' },
  { title: 'asdasdasdasdasd', author: 'lalalalalalalala' },
  { title: 'asdasdasdasdasd', author: 'lalalalalalalala' },
  { title: 'asdasdasdasdasd', author: 'lalalalalalalala' }
];

export default () => {
  const { data, isLoading } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavorites());
  });
  return (
    <Container>
      <List>
        {mock.map((fav) => (
          <Favorite>
            <Entry>{fav.title}</Entry>
            <Entry>{fav.author}</Entry>
          </Favorite>
        ))}
      </List>
      <FavoriteSwitch />
    </Container>
  );
};
