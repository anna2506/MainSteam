export const getPlayerGame = (state, gameId) => state
  .playerGame.games.find((x) => x.gameId === gameId);

export const getPlayerGames = (state) => state.playerGame.playerGames;
