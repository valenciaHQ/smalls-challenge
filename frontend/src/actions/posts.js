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

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

export const fetchTopPosts = (nextItem) => async (dispatch) => {
  const favorites = [];

  dispatch({ type: FETCH_POST_REQUEST });
  let url = `${REDDIT_URL}?limit=${POST_LIMIT}`;
  if (nextItem) {
    url = `${url}&after=${nextItem}`;
  }
  try {
    const response = await axios.get(url);
    const posts = response.data.data.children.map((child) => ({ ...child.data }));
    const lastFetched = response.data.data.after;

    for (const post of posts) {
      try {
        const result = await api.get(`favorites/${post.id}`);
        favorites.push(result.data);
      } catch (e) {}
    }

    const formattedPosts = posts.map((post) => {
      if (favorites.some((fav) => fav.postid === post.id)) {
        const result = { ...post, favorite: true };
        console.log('result: ', result);
        return result;
      }
      return post;
    });

    return dispatch({
      type: FETCH_POST_SUCCESS,
      lastFetched,
      payload: formattedPosts
    });
  } catch (err) {
    console.error('Post error: ', err);
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
