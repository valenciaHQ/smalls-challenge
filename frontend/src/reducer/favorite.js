import {
  FETCH_FAVORITE_REQUEST,
  FETCH_FAVORITE_SUCCESS,
  FETCH_FAVORITE_ERROR,
  FAVORITE_TRX_REQUEST,
  FAVORITE_TRX_SUCCESS,
  FAVORITE_TRX_ERROR
} from '../constants';

const initialState = {
  data: {},
  isLoading: false,
  error: false,
  trxInProgress: false,
  trxSuccess: false,
  trxError: false
};

const favorite = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FAVORITE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_FAVORITE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    }
    case FETCH_FAVORITE_ERROR:
      return { ...state, error: true, isLoading: false };

    case FAVORITE_TRX_REQUEST: {
      return { ...state, trxInProgress: true };
    }

    case FAVORITE_TRX_SUCCESS: {
      return { ...state, trxInProgress: false, trxSuccess: true };
    }

    case FAVORITE_TRX_ERROR: {
      return { ...state, trxInProgress: false, trxSuccess: false, trxError: true };
    }

    default:
      return initialState;
  }
};

export default favorite;
