import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
  SET_READED,
  DISMISS_ALL,
  DISMISS_POST
} from '../constants';

const initialState = {
  data: [],
  isLoading: false,
  error: false,
  lastFetched: null,
  allDismissed: false
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_POST_SUCCESS: {
      const data = [...state.data, ...action.payload];
      return {
        ...state,
        data,
        lastFetched: action.lastFetched,
        isLoading: false,
        allDismissed: false
      };
    }
    case FETCH_POST_ERROR:
      return { ...state, error: true, isLoading: false };
    case SET_READED: {
      const newData = state.data;
      const foundIndex = newData.findIndex((x) => x.id === action.payload);
      newData[foundIndex].readed = true;
      return {
        ...state,
        data: newData
      };
    }
    case DISMISS_ALL: {
      return {
        ...state,
        allDismissed: true,
        data: []
      };
    }
    case DISMISS_POST: {
      return {
        ...state,
        data: state.data.filter((post) => post.id !== action.payload)
      };
    }

    default:
      return state;
  }
};

export default posts;
