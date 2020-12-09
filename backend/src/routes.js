const dbHelper = require('./databaseHelper');
const errorMessages = require('./errorMessages');
const authHelper = require('./authHelper');
const tokenHelper = require('./token');

const getPlayerInfo = async (header) => {
  const { token } = header;
  const player = await dbHelper.getPlayerInfo(token);
  if (!player) {
    return { error: errorMessages.accessDenied };
  }
  return player;
};

module.exports = (app) => {
  app.get('/', (request, response) => response.json({ info: 'Welcome to the server' }));

  app.get('/ping', (request, response) => response.json({ info: 'pong' }));

  app.post('/register', async (request, response) => {
    const {
      password,
      login,
      email,
      country,
    } = request.body;
    if (await dbHelper.getPlayerByLogin(login)) {
      return response.status(500).json({ message: errorMessages.loginDuplicate });
    }
    if (await dbHelper.getPlayerByEmail(email)) {
      return response.status(500).json({ message: errorMessages.emailDuplicate });
    }
    const hash = await authHelper.generatePasswordHash(password);
    const token = tokenHelper.generateToken(login, email);
    await dbHelper.savePlayer(login, email, hash, country, token);
    return response.json({ token });
  });

  app.post('/login', async (request, response) => {
    const {
      password,
      login,
    } = request.body;
    const player = await dbHelper.getPlayerByLogin(login);
    if (!player) {
      return response.status(500).json({ message: errorMessages.wrongLogin });
    }
    if (await authHelper.checkPassword(password, player.pass_hash)) {
      return response.json({ token: player.token });
    }
    return response.status(500).json({ message: errorMessages.wrongPassword });
  });

  app.get('/player', async (request, response) => {
    const player = await getPlayerInfo(request.header);
    if (player.error) {
      return response.status(404).json({ message: errorMessages.playerNotFound });
    }
    return response.json({ ...player });
  });

  app.get('/games/{id}', async (request, response) => {
    const player = await getPlayerInfo(request.header);
    if (player.error) {
      return response.status(500).json({ message: player.error });
    }
    const { id } = request.params;
    const game = await dbHelper.getGame(id);
    if (!game) {
      return response.status(404).json({ message: errorMessages.gameNotFound });
    }
    return response.json({ ...game });
  });

  app.get('/games', async (request, response) => {
    const player = await getPlayerInfo(request.header);
    if (player.error) {
      return response.status(500).json({ message: player.error });
    }
    const games = await dbHelper.getGames();
    return response.json([...games]);
  });

  app.get('/playerGame', async (request, response) => {
    const player = await getPlayerInfo(request.header);
    if (player.error) {
      return response.status(500).json({ message: player.error });
    }
    const playerGames = await dbHelper.getPlayerGames(player.id);
    playerGames.map((playerGame) => ({
      gameId: playerGame.game_id,
      timeSpent: playerGame.time_spent,
      highScore: playerGame.high_score,
      beat100: playerGame.beat_100,
      beat200: playerGame.beat_200,
      beat400: playerGame.beat_400,
      beat700: playerGame.beat_700,
      beat1000: playerGame.beat_1000,
      beat10000: playerGame.beat_10000,
    }));
    return response.json([...playerGames]);
  });

  app.post('/playerGame', async (request, response) => {
    const player = await getPlayerInfo(request.header);
    if (player.error) {
      return response.status(500).json({ message: player.error });
    }
    const {
      playerId,
      gameId,
      timeSpent,
      highScore,
      beat100,
      beat200,
      beat400,
      beat700,
      beat1000,
      beat10000,
    } = request.body;
    try {
      await dbHelper.savePlayerGame(
        playerId,
        gameId,
        timeSpent,
        highScore,
        beat100,
        beat200,
        beat400,
        beat700,
        beat1000,
        beat10000,
      );
      return response.status(200);
    } catch (e) {
      return response.status(500).json({ message: e.message });
    }
  });

  app.put('/player', async (request, response) => {
    const player = await getPlayerInfo(request.header);
    if (player.error) {
      return response.status(500).json({ message: player.error });
    }
    const {
      id,
      login,
      experience,
      country,
      email,
    } = request.body;
    try {
      await dbHelper.updatePlayer(login, experience, country, email, id);
      return response.status(200);
    } catch (e) {
      return response.status(500).json({ message: e.message });
    }
  });

  app.get('/rating', async (request, response) => {
    const player = await getPlayerInfo(request.header);
    if (player.error) {
      return response.status(500).json({ message: player.error });
    }
    const rating = await dbHelper.getRating();
    return response.json([...rating]);
  });
};
