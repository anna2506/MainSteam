import { combineReducers } from 'redux';
import app from './app';
import steam from './steam';

const appReducer = combineReducers({
  app,
  steam,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;