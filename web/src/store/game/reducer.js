import actionTypes from './actionTypes';

const initialState = {
  games: [],
  game: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.GAME_REQUEST:
    case actionTypes.GAMES_REQUEST:
      return {
        ...state,
        errorMessage: '',
      };
    case actionTypes.GAMES_SUCCESS:
      return {
        ...state,
        games: action.data,
      };
    case actionTypes.GAME_SUCCESS:
      return {
        ...state,
        game: action.data,
      };
    case actionTypes.GAME_FAILURE:
    case actionTypes.GAMES_FAILURE:
      return {
        ...state,
        errorMessage: action.message,
      };
    default:
      return state;
  }
}
