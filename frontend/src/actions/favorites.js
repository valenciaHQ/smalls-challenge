import api from '../api';
import {
  FETCH_FAVORITES_REQUEST,
  FETCH_FAVORITES_SUCCESS,
  FETCH_FAVORITES_ERROR,
  FETCH_FAVORITE_REQUEST,
  FETCH_FAVORITE_SUCCESS,
  FETCH_FAVORITE_ERROR,
  SAVE_FAVORITE_REQUEST,
  SAVE_FAVORITE_SUCCESS,
  SAVE_FAVORITE_ERROR,
  DELETE_FAVORITE_REQUEST,
  DELETE_FAVORITE_SUCCESS,
  DELETE_FAVORITE_ERROR,
  SHOW_FAVORITES
} from '../constants';

export const fetchFavorites = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_FAVORITES_REQUEST });
    const response = await api.get('favorites');
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
    dispatch({ type: FETCH_FAVORITE_REQUEST });
    const response = await api.get(`favorites/${id}`);

    return dispatch({
      type: FETCH_FAVORITE_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({ type: FETCH_FAVORITE_ERROR });
    return null;
  }
};

export const saveFavorite = (favorite) => async (dispatch) => {
  try {
    dispatch({ type: SAVE_FAVORITE_REQUEST });
    const response = await api.post('favorites', favorite);

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
    const response = await api.delete(`favorites/${id}`);

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

export const showFavorites = () => ({
  type: SHOW_FAVORITES
});
