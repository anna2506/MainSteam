import types from './actionTypes';

export const initialState = {
  title: 'Steam',
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_LOADING:
      return {
        ...state,
        isLoading: action.data,
      };
    default:
      return state;
  }
}
