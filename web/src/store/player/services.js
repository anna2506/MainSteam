import axios from 'axios';
import getHeaders from './headers';

export const logIn = (login, password) => axios
  .post('/login', { login, password }).then((x) => x.data);

export const register = (login, email, password) => axios
  .post('/register', { login, email, password }).then((x) => x.data);

export const getPlayer = () => axios
  .get('/player', getHeaders()).then((x) => x.data);

export const updatePlayer = (playerInfo) => axios
  .put('/player', {
    login: playerInfo.login,
    experience: playerInfo.experience,
    country: playerInfo.country,
    email: playerInfo.email,
  }, getHeaders()).then((x) => x.data);

export const getRating = () => axios
  .get('/rating', getHeaders()).then((x) => x.data);
