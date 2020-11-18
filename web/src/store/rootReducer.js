import { combineReducers } from 'redux';
import application from './application/reducer';
import steam from './steam/reducer';

const appReducer = combineReducers({
  application,
  steam,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
