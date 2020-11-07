import axios from 'axios';

import {
  FETCH_FAVORITES_REQUEST,
  FETCH_FAVORITES_SUCCESS,
  FETCH_FAVORITES_ERROR,
  SAVE_FAVORITE_REQUEST,
  SAVE_FAVORITE_SUCCESS,
  SAVE_FAVORITE_ERROR,
  DELETE_FAVORITE_REQUEST,
  DELETE_FAVORITE_SUCCESS,
  DELETE_FAVORITE_ERROR
} from '../constants';

export const fetchFavorites = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_FAVORITES_REQUEST });
    const response = await axios.get('http://localhost:8080/api/favorites');
    console.log('fetchFavorites: ', response);
    return dispatch({
      type: FETCH_FAVORITES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({ type: FETCH_FAVORITES_ERROR });
    return null;
  }
};

export const getFavorite = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_FAVORITES_REQUEST });
    const response = await axios.get(`http://localhost:8080/api/favorites/${id}`);
    console.log('getFavorite: ', response);

    return dispatch({
      type: FETCH_FAVORITES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({ type: FETCH_FAVORITES_ERROR });
    return null;
  }
};

export const saveFavorite = (favorite) => async (dispatch) => {
  try {
    dispatch({ type: SAVE_FAVORITE_REQUEST });
    const response = await axios.post('http://localhost:8080/api/favorites', favorite);
    console.log('saveFavorite: ', response);

    if (response.status === 201) {
      return dispatch({
        type: SAVE_FAVORITE_SUCCESS,
        payload: response.data.id
      });
    }

    return dispatch({ type: SAVE_FAVORITE_ERROR });
  } catch (err) {
    dispatch({ type: SAVE_FAVORITE_ERROR });
    return null;
  }
};

export const deleteFavorite = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_FAVORITE_REQUEST });
    const response = await axios.delete(`http://localhost:8080/api/favorites/${id}`);
    console.log('deleteFavorite: ', response);

    if (response.status === 204) {
      return dispatch({
        type: DELETE_FAVORITE_SUCCESS,
        payload: response.data.id
      });
    }

    return dispatch({ type: DELETE_FAVORITE_ERROR });
  } catch (err) {
    dispatch({ type: DELETE_FAVORITE_ERROR });
    return null;
  }
};
