import api from '../api';
import {
  FETCH_FAVORITES_REQUEST,
  FETCH_FAVORITES_SUCCESS,
  FETCH_FAVORITES_ERROR,
  FETCH_FAVORITE_REQUEST,
  FETCH_FAVORITE_SUCCESS,
  FETCH_FAVORITE_ERROR,
  FAVORITE_TRX_REQUEST,
  FAVORITE_TRX_SUCCESS,
  FAVORITE_TRX_ERROR
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
    return dispatch({ type: FETCH_FAVORITES_ERROR });
  }
};

export const getFavorite = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_FAVORITE_REQUEST });
    const response = await api.get(`favorites/${id}`);
    console.log('Response: ', response);
    return dispatch({
      type: FETCH_FAVORITE_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    return dispatch({ type: FETCH_FAVORITE_ERROR });
  }
};

export const saveFavorite = (favorite) => async (dispatch) => {
  try {
    dispatch({ type: FAVORITE_TRX_REQUEST });
    const response = await api.post('favorites', favorite);

    if (response.status === 201) {
      return dispatch({
        type: FAVORITE_TRX_SUCCESS,
        payload: response.data.id
      });
    }

    return dispatch({ type: FAVORITE_TRX_SUCCESS });
  } catch (err) {
    return dispatch({ type: FAVORITE_TRX_ERROR });
  }
};

export const deleteFavorite = (id) => async (dispatch) => {
  try {
    dispatch({ type: FAVORITE_TRX_REQUEST });
    const response = await api.delete(`favorites/${id}`);

    if (response.status === 204) {
      return dispatch({
        type: FAVORITE_TRX_SUCCESS,
        payload: response.data.id
      });
    }

    return dispatch({ type: FAVORITE_TRX_ERROR });
  } catch (err) {
    return dispatch({ type: FAVORITE_TRX_ERROR });
  }
};
