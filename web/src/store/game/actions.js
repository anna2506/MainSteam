import actionTypes from './actionTypes';
import * as services from './services';

export const getGame = (id) => (dispatch) => (
  new Promise(((resolve, reject) => {
    dispatch({ type: actionTypes.GAME_REQUEST });
    services.getGame(id)
      .then((data) => {
        dispatch({ type: actionTypes.GAME_SUCCESS, data });
        resolve();
      })
      .catch((error) => {
        dispatch({ type: actionTypes.GAME_FAILURE, message: error.message });
        reject();
      });
  }))
);

export const getGames = () => (dispatch) => (
  new Promise(((resolve, reject) => {
    dispatch({ type: actionTypes.GAMES_REQUEST });
    services.getGames()
      .then((data) => {
        dispatch({ type: actionTypes.GAMES_SUCCESS, data });
        resolve();
      })
      .catch((error) => {
        dispatch({ type: actionTypes.GAMES_FAILURE, message: error.message });
        reject();
      });
  }))
);
