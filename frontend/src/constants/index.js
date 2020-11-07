export const BASE_URL = 'https://www.reddit.com/r/all/top.json';

export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';

export const DISMISS_POST = 'DISMISS_POST';
export const DISMISS_ALL = 'DISMISS_ALL';
export const SET_READED = 'SET_READED';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';
export const POST_LIMIT = 5;

export const FETCH_FAVORITES_REQUEST = 'FETCH_FAVORITES_REQUEST';
export const FETCH_FAVORITES_SUCCESS = 'FETCH_FAVORITES_SUCCESS';
export const FETCH_FAVORITES_ERROR = 'FETCH_FAVORITES_ERROR';
export const SAVE_FAVORITE_REQUEST = 'SAVE_FAVORITE_REQUEST';
export const SAVE_FAVORITE_SUCCESS = 'SAVE_FAVORITE_SUCCESS';
export const SAVE_FAVORITE_ERROR = 'SAVE_FAVORITE_ERROR';
export const DELETE_FAVORITE_REQUEST = 'DELETE_FAVORITE_REQUEST';
export const DELETE_FAVORITE_SUCCESS = 'DELETE_FAVORITE_SUCCESS';
export const DELETE_FAVORITE_ERROR = 'DELETE_FAVORITE_ERROR';

export const DEVICE_SIZE = {
  mobileS: '320px',
  tablet: '768px'
};

export const DEVICE = {
  mobileS: `(min-width: ${DEVICE_SIZE.mobileS})`,
  tablet: `(min-width: ${DEVICE_SIZE.tablet})`
};
