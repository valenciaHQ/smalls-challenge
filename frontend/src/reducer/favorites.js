import {
  FETCH_FAVORITES_REQUEST,
  FETCH_FAVORITES_SUCCESS,
  FETCH_FAVORITES_ERROR,
  SHOW_FAVORITES
} from '../constants';

const initialState = {
  data: [],
  isLoading: false,
  error: false,
  show: false
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
        isLoading: false,
        data: action.payload
      };
    }
    case FETCH_FAVORITES_ERROR:
      return { ...state, error: true, isLoading: false };

    case SHOW_FAVORITES:
      return { ...state, show: !state.show };

    default:
      return initialState;
  }
};

export default favorites;
