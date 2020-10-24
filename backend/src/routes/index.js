module.exports = (app) => {
  app.get('/', (request, response) => {
    response.json({ info: 'Welcome to the server' });
  });

  app.get('/ping', (request, response) => {
    response.json({ info: 'pong' });
  });
};
