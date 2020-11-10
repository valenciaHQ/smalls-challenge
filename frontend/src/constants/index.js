export const REDDIT_URL = 'https://www.reddit.com/r/all/top.json';

export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';

export const DISMISS_POST = 'DISMISS_POST';
export const DISMISS_ALL = 'DISMISS_ALL';
export const SET_READED = 'SET_READED';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';
export const POST_LIMIT = 5;
export const SHOW_FAVORITES = 'SHOW_FAVORITES';

export const FETCH_FAVORITES_REQUEST = 'FETCH_FAVORITES_REQUEST';
export const FETCH_FAVORITES_SUCCESS = 'FETCH_FAVORITES_SUCCESS';
export const FETCH_FAVORITES_ERROR = 'FETCH_FAVORITES_ERROR';

export const FETCH_FAVORITE_REQUEST = 'FETCH_FAVORITE_REQUEST';
export const FETCH_FAVORITE_SUCCESS = 'FETCH_FAVORITE_SUCCESS';
export const FETCH_FAVORITE_ERROR = 'FETCH_FAVORITE_ERROR';
export const FAVORITE_TRX_REQUEST = 'FAVORITE_TRX_REQUEST';
export const FAVORITE_TRX_SUCCESS = 'FAVORITE_TRX_SUCCESS';
export const FAVORITE_TRX_ERROR = 'FAVORITE_TRX_ERROR';

export const DEVICE_SIZE = {
  mobileS: '320px',
  tablet: '768px'
};

export const DEVICE = {
  mobileS: `(min-width: ${DEVICE_SIZE.mobileS})`,
  tablet: `(min-width: ${DEVICE_SIZE.tablet})`
};

export const FAVORITES_SERVICE_NOT_AVAILABLE =
  'Your favs are not available right now. Try again later!';
export const FAVORITE_TRX_SUCCESS_MSG = 'Success!';
export const TOAST_CONFIGURATION = {
  position: 'bottom-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  progress: undefined
};

export const toastSuccessId = 'toast-success-id';
export const toastErrorId = 'toast-error-id';
