/* eslint-disable function-paren-newline */
import axios from 'axios';
import api from '../api';

import {
  REDDIT_URL,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
  SET_READED,
  DISMISS_POST,
  DISMISS_ALL,
  POST_LIMIT,
  FETCH_FAVORITE_ERROR
} from '../constants';

export const fetchTopPosts = (nextItem) => async (dispatch) => {
  const getFavoritePromises = [];
  const favorites = [];

  dispatch({ type: FETCH_POST_REQUEST });
  let url = `${REDDIT_URL}?limit=${POST_LIMIT}`;
  if (nextItem) {
    url = `${url}&after=${nextItem}`;
  }
  try {
    const response = await axios.get(url);
    const posts = response.data.data.children.map((child) => ({ ...child.data }));
    console.log('posts: ', posts);
    const lastFetched = response.data.data.after;

    try {
      posts.forEach(({ id }) => {
        getFavoritePromises.push(api.get(`favorites/${id}`));
      });

      const responseFavorites = await axios.all(getFavoritePromises);
      console.log('responseFavorites: ', responseFavorites);

      /*
      result.forEach(({ data }) => {
        if (data) {
          favorites.push(data);
        }
      });

      posts.map((post) =>
        favorites.forEach((favorite) => {
          if (post.id === favorite.id) {
            return { ...post, favorite: true };
          }
          return post;
        })
      );
      */
    } catch (e) {
      console.warn(e);
    }

    return dispatch({
      type: FETCH_POST_SUCCESS,
      lastFetched,
      payload: posts
    });
  } catch (err) {
    console.error(err);
    return dispatch({ type: FETCH_POST_ERROR, err });
  }
};

export const setReaded = (id) => ({
  type: SET_READED,
  payload: id
});

export const dismissPost = (id) => ({
  type: DISMISS_POST,
  payload: id
});

export const dismissAll = () => ({
  type: DISMISS_ALL
});
