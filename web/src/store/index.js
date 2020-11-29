import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import rootReducer from './rootReducer';

axios.defaults.baseURL = 'http://localhost:8080';

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);

export default store;
