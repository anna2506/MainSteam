import actionTypes from './actionTypes';

const initialState = {
  playerGames: [],
  errorMessage: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.PLAYER_GAMES_REQUEST:
    case actionTypes.UPDATE_PLAYER_GAMES_REQUEST:
      return {
        ...state,
        errorMessage: '',
      };
    case actionTypes.PLAYER_GAMES_SUCCESS:
      return {
        ...state,
        playerGames: action.data,
      };
    case actionTypes.UPDATE_PLAYER_GAMES_SUCCESS: {
      const newPlayerGames = [...state.playerGames];
      state.playerGames.map((x, index) => {
        if (x.gameId === action.data.gameId) {
          newPlayerGames[index] = action.data;
        }
        return x;
      });
      return {
        ...state,
        playerGames: [...newPlayerGames],
      };
    }
    case actionTypes.PLAYER_GAMES_FAILURE:
    case actionTypes.UPDATE_PLAYER_GAMES_FAILURE:
      return {
        ...state,
        errorMessage: action.message,
      };
    default:
      return state;
  }
}
