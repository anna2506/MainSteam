import { combineReducers } from 'redux';
import player from './player/reducer';
import game from './game/reducer';
import playerGame from './playerGame/reducer';

const appReducer = combineReducers({
  player,
  game,
  playerGame,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
