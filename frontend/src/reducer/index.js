import { combineReducers } from 'redux';

import posts from './posts';
import favorites from './favorites';
import favorite from './favorite';

export default combineReducers({
  posts,
  favorite,
  favorites
});
