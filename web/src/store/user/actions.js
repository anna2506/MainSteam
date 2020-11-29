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

export const register = (login, email, password) => (dispatch) => (
  new Promise((resolve, reject) => {
    dispatch({ type: actionTypes.REGISTER_REQUEST });
    services.register(login, email, password)
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
