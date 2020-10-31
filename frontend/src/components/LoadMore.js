/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopPosts } from '../actions/posts';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;

  :hover {
    cursor: pointer;
  }
`;

const ArrowDown = styled.div`
  border: solid ${(props) => props.theme.colors.white};
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

export default () => {
  const lastFetched = useSelector((state) => state.posts.lastFetched);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchTopPosts(lastFetched));
  };

  return (
    <Container onClick={handleClick}>
      <ArrowDown /> Load more <ArrowDown />
    </Container>
  );
};
