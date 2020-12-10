import axios from 'axios';
import getHeaders from '../player/headers';

export const getPlayerGames = () => axios
  .get('/playerGames', getHeaders()).then((x) => x.data);

export const updatePlayerGame = (playerGame) => axios
  .post('/playerGames', { ...playerGame }, getHeaders()).then((x) => x.data);
