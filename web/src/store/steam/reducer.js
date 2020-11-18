import types from './actionTypes';

export const initialState = {
  isLoading: false,
};

export default function reducer(state = initialState, action) {
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
