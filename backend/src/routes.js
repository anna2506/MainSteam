const dbHelper = require('./databaseHelper');
const errorMessages = require('./errorMessages');
const authHelper = require('./authHelper');
const tokenHelper = require('./token');

module.exports = (app) => {
  app.get('/', (request, response) => response.json({ info: 'Welcome to the server' }));

  app.get('/ping', (request, response) => response.json({ info: 'pong' }));

  app.post('/register', async (request, response) => {
    const {
      password,
      login,
      email,
      country,
    } = request.payload;
    if (await dbHelper.getUserByLogin(login)) {
      return response.status(500).json({ message: errorMessages.loginDuplicate });
    }
    if (await dbHelper.getUserByEmail(email)) {
      return response.status(500).json({ message: errorMessages.emailDuplicate });
    }
    const hash = await authHelper.generatePasswordHash(password);
    const token = tokenHelper.generateToken(login, email);
    await dbHelper.saveUser(login, email, hash, country, token);
    return response.json({ token });
  });

  app.post('/login', async (request, response) => {
    const {
      password,
      login,
    } = request.payload;
    const user = await dbHelper.getUserByLogin(login);
    if (!user) {
      return response.status(500).json({ message: errorMessages.wrongLogin });
    }
    if (await authHelper.checkPassword(password, user.pass_hash)) {
      return response.json({ token: user.token });
    }
    return response.status(500).json({ message: errorMessages.wrongPassword });
  });
};
