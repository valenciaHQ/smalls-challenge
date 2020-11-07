import {
  FETCH_FAVORITES_REQUEST,
  FETCH_FAVORITES_SUCCESS,
  FETCH_FAVORITES_ERROR
} from '../constants';

const initialState = {
  data: [],
  isLoading: false,
  error: false
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FAVORITES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_FAVORITES_SUCCESS: {
      return {
        ...state,
        data: action.payload
      };
    }
    case FETCH_FAVORITES_ERROR:
      return { ...state, error: true, isLoading: false };

    default:
      return initialState;
  }
};

export default favorites;
