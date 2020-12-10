import { combineReducers } from 'redux';
import application from './application/reducer';
import steam from './steam/reducer';
import player from './player/reducer';
import game from './game/reducer';
import playerGame from './playerGame/reducer';

const appReducer = combineReducers({
  application,
  steam,
  player,
  game,
  playerGame,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
