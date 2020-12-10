import axios from 'axios';
import getHeaders from '../player/headers';

export const getGame = (id) => axios
  .get(`/games/${id}`, getHeaders()).then((x) => x.data);

export const getGames = () => axios
  .get('/games', getHeaders()).then((x) => x.data);
