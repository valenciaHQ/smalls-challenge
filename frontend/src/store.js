/* eslint-disable no-underscore-dangle */
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
