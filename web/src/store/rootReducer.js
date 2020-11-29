import { combineReducers } from 'redux';
import application from './application/reducer';
import steam from './steam/reducer';
import user from './user/reducer';

const appReducer = combineReducers({
  application,
  steam,
  user,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
