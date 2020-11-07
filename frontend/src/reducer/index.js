import { combineReducers } from 'redux';

import posts from './posts';
import favorites from './favorites';

export default combineReducers({
  posts,
  favorites
});
