import actionTypes from './actionTypes';
import * as services from './services';

export const getPlayerGames = () => (dispatch) => (
  new Promise(((resolve, reject) => {
    dispatch({ type: actionTypes.PLAYER_GAMES_REQUEST });
    services.getPlayerGames()
      .then((data) => {
        dispatch({ type: actionTypes.PLAYER_GAMES_SUCCESS, data });
        resolve();
      })
      .catch((error) => {
        dispatch({ type: actionTypes.PLAYER_GAMES_FAILURE, message: error.message });
        reject();
      });
  }))
);

export const updatePlayerGame = (playerGame) => (dispatch) => (
  new Promise((resolve, reject) => {
    dispatch({ type: actionTypes.UPDATE_PLAYER_GAMES_REQUEST });
    services.updatePlayerGame(playerGame)
      .then(() => {
        dispatch({ type: actionTypes.UPDATE_PLAYER_GAMES_SUCCESS, data: playerGame });
        resolve();
      })
      .catch((error) => {
        dispatch({ type: actionTypes.UPDATE_PLAYER_GAMES_FAILURE, message: error.message });
        reject();
      });
  }));
