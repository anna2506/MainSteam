const path = require('path');
const dbHelper = require('./databaseHelper');
const errorMessages = require('./errorMessages');
const authHelper = require('./authHelper');
const tokenHelper = require('./token');

const appRoot = path.join(path.resolve(__dirname));

const getPlayerInfo = async (token) => {
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
    const player = await getPlayerInfo(request.headers.authorization);
    if (player.error) {
      return response.status(404).json({ message: errorMessages.playerNotFound });
    }
    return response.json({
      login: player.login,
      experience: player.experience,
      country: player.country,
      email: player.email,
    });
  });

  app.get('/games/:id', async (request, response) => {
    const player = await getPlayerInfo(request.headers.authorization);
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
    const player = await getPlayerInfo(request.headers.authorization);
    if (player.error) {
      return response.status(500).json({ message: player.error });
    }
    const games = await dbHelper.getGames();
    return response.json([...games]);
  });

  app.get('/playerGames', async (request, response) => {
    const player = await getPlayerInfo(request.headers.authorization);
    if (player.error) {
      return response.status(500).json({ message: player.error });
    }
    const playerGames = await dbHelper.getPlayerGames(player.id);
    if (playerGames) {
      const playerGamesToSend = [];
      playerGames.forEach((playerGame) => {
        const playerGameToSend = {
          gameId: playerGame.game_id,
          timeSpent: playerGame.time_spent,
          highScore: playerGame.high_score,
          beat100: playerGame.beat_100,
          beat200: playerGame.beat_200,
          beat400: playerGame.beat_400,
          beat700: playerGame.beat_700,
          beat1000: playerGame.beat_1000,
          beat10000: playerGame.beat_10000,
        };
        playerGamesToSend.push(playerGameToSend);
        return playerGame;
      });
      return response.json(playerGamesToSend);
    }
    return response.json([]);
  });

  app.post('/playerGames', async (request, response) => {
    const player = await getPlayerInfo(request.headers.authorization);
    if (player.error) {
      return response.status(500).json({ message: player.error });
    }
    const {
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
        player.id,
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
      return response.json({ ok: true });
    } catch (e) {
      return response.status(500).json({ message: e.message });
    }
  });

  app.put('/player', async (request, response) => {
    const player = await getPlayerInfo(request.headers.authorization);
    if (player.error) {
      return response.status(500).json({ message: player.error });
    }
    const {
      login,
      experience,
      country,
      email,
    } = request.body;

    if (login !== player.login && await dbHelper.getPlayerByLogin(login)) {
      return response.status(500).json({ message: errorMessages.loginDuplicate });
    }

    try {
      await dbHelper.updatePlayer(login, experience, country, email, player.id);
      return response.json({ ok: true });
    } catch (e) {
      return response.status(500).json({ message: e.message });
    }
  });

  app.get('/rating', async (request, response) => {
    const player = await getPlayerInfo(request.headers.authorization);
    if (player.error) {
      return response.status(500).json({ message: player.error });
    }
    const rating = await dbHelper.getRating();
    return response.json([...rating]);
  });

  app.get('/player/avatar/:id', async (request, response) => {
    const { id } = request.params;
    return response.sendFile(path.join(appRoot, `/playerAvatar/${id}.png`));
  });

  app.get('/game/:name/image/:number', async (request, response) => {
    const { name, number } = request.params;
    return response.sendFile(path.join(appRoot, `/gameImages/${name}/${number}.png`));
  });

  app.get('/game/:name/image/logo', async (request, response) => {
    const { name } = request.params;
    return response.sendFile(path.join(appRoot, `/gameImages/${name}/logo.png`));
  });
};
