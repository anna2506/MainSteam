import axios from 'axios';

export const logIn = (login, password) => axios
  .post('/login', { login, password }).then((x) => x.data);

export const register = (login, email, password) => axios
  .post('/register', { login, email, password }).then((x) => x.data);
