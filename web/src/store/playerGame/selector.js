import * as playerSelectors from '../player/selector';

export const getPlayerGame = (state, gameId) => {
  const playerGame = state.playerGame.playerGames
    .find((x) => x.gameId === parseInt(gameId, 10));
  if (playerGame) {
    return playerGame;
  }
  const playerId = playerSelectors.getPlayerId(state);
  return {
    playerId,
    gameId,
    timeSpent: 0,
    highScore: 0,
    beat100: false,
    beat200: false,
    beat400: false,
    beat700: false,
    beat1000: false,
    beat10000: false,
  };
};

export const getPlayerGames = (state) => state.playerGame.playerGames;
