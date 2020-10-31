import axios from 'axios';

import {
  BASE_URL,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
  SET_READED,
  DISMISS_POST,
  DISMISS_ALL,
  POST_LIMIT
} from '../constants';

export const fetchTopPosts = (nextItem) => async (dispatch) => {
  dispatch({ type: FETCH_POST_REQUEST });
  let url = `${BASE_URL}?limit=${POST_LIMIT}`;
  if (nextItem) {
    url = `${url}&after=${nextItem}`;
  }
  try {
    const response = await axios.get(url);
    const payload = response.data.data.children.map((child) => ({ ...child.data }));
    const lastFetched = response.data.data.after;
    return dispatch({
      type: FETCH_POST_SUCCESS,
      lastFetched,
      payload
    });
  } catch (err) {
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
