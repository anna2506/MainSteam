import actionTypes from './actionTypes';
import calculateLevel from '../../helpers/calculateLevel';

const initialState = {
  id: 0,
  loggedIn: false,
  login: null,
  email: null,
  country: null,
  experience: 0,
  level: 0,
  rating: [],
  countries: [],
  errorMessage: '',
};

// Если токен авторизации в local storage, то пользователь в сети
const token = localStorage.getItem('token');
if (token) {
  initialState.loggedIn = true;
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOG_IN_REQUEST:
    case actionTypes.REGISTER_REQUEST:
    case actionTypes.PLAYER_REQUEST:
    case actionTypes.UPDATE_PLAYER_REQUEST:
    case actionTypes.RATING_REQUEST:
    case actionTypes.COUNTRIES_REQUEST:
      return {
        ...state,
        errorMessage: '',
      };
    case actionTypes.LOG_IN_SUCCESS:
    case actionTypes.REGISTER_SUCCESS: {
      localStorage.setItem('token', action.data.token);
      return { ...state, loggedIn: true };
    }
    case actionTypes.LOGOUT: {
      localStorage.clear();
      return {
        ...initialState,
        loggedIn: false,
      };
    }
    case actionTypes.PLAYER_SUCCESS:
    case actionTypes.UPDATE_PLAYER_SUCCESS:
      return {
        ...state,
        email: action.data.email,
        login: action.data.login,
        country: action.data.country,
        experience: action.data.experience,
        level: calculateLevel(action.data.experience),
      };
    case actionTypes.PLAYER_FAILURE:
    case actionTypes.LOG_IN_FAILURE:
    case actionTypes.REGISTER_FAILURE:
    case actionTypes.UPDATE_PLAYER_FAILURE:
    case actionTypes.RATING_FAILURE:
    case actionTypes.COUNTRIES_FAILURE:
      return {
        ...state,
        errorMessage: action.message,
      };
    case actionTypes.RATING_SUCCESS:
      return {
        ...state,
        rating: [...action.data],
      };
    case actionTypes.COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: [...action.data],
      };
    default:
      return state;
  }
}
