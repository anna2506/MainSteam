import actionTypes from './actionTypes';
import * as services from './services';

export const logIn = (login, password) => (dispatch) => (
  new Promise((resolve, reject) => {
    dispatch({ type: actionTypes.LOG_IN_REQUEST });
    services.logIn(login, password)
      .then((data) => {
        dispatch({ type: actionTypes.LOG_IN_SUCCESS, data });
        resolve();
      })
      .catch(() => {
        dispatch({ type: actionTypes.LOG_IN_FAILURE });
        reject();
      });
  }));

export const register = (login, email, password, country) => (dispatch) => (
  new Promise((resolve, reject) => {
    dispatch({ type: actionTypes.REGISTER_REQUEST });
    services.register(login, email, password, country)
      .then((data) => {
        dispatch({ type: actionTypes.REGISTER_SUCCESS, data });
        resolve();
      })
      .catch(() => {
        dispatch({ type: actionTypes.REGISTER_FAILURE });
        reject();
      });
  }));

export const logout = () => (dispatch) => {
  dispatch({ type: actionTypes.LOGOUT });
};

export const getPlayer = () => (dispatch) => (
  new Promise(((resolve, reject) => {
    dispatch({ type: actionTypes.PLAYER_REQUEST });
    services.getPlayer()
      .then((data) => {
        dispatch({ type: actionTypes.PLAYER_SUCCESS, data });
        resolve();
      })
      .catch((error) => {
        dispatch({ type: actionTypes.PLAYER_FAILURE, message: error.message });
        reject();
      });
  }))
);

export const updatePlayer = (playerInfo) => (dispatch) => (
  new Promise((resolve, reject) => {
    dispatch({ type: actionTypes.UPDATE_PLAYER_REQUEST });
    services.updatePlayer(playerInfo)
      .then(() => {
        dispatch({ type: actionTypes.UPDATE_PLAYER_SUCCESS, data: playerInfo });
        resolve();
      })
      .catch((error) => {
        dispatch({ type: actionTypes.UPDATE_PLAYER_FAILURE, message: error.message });
        reject();
      });
  }));

export const getRating = () => (dispatch) => (
  new Promise(((resolve, reject) => {
    dispatch({ type: actionTypes.RATING_REQUEST });
    services.getRating()
      .then((data) => {
        dispatch({ type: actionTypes.RATING_SUCCESS, data });
        resolve();
      })
      .catch((error) => {
        dispatch({ type: actionTypes.RATING_FAILURE, message: error.message });
        reject();
      });
  }))
);

export const getCountries = () => (dispatch) => (
    new Promise(((resolve, reject) => {
        dispatch({type: actionTypes.COUNTRIES_REQUEST});
        services.getCountries()
            .then((data) => {
                dispatch({ type: actionTypes.COUNTRIES_SUCCESS, data});
                resolve();
            })
            .catch((error) => {
                dispatch({ type: actionTypes.COUNTRIES_FAILURE, message: error.message});
                reject();
            });
    }))
);
