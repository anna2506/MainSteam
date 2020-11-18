import types from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const setAppLoading = (isLoading) => (dispatch) => {
  dispatch({
    type: types.SET_LOADING,
    data: isLoading,
  });
};
