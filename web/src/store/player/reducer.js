import actionTypes from './actionTypes';

const initialState = {
  loggedIn: false,
  login: null,
  email: null,
  country: null,
  experience: 0,
  rating: [],
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
      return { ...initialState };
    }
    case actionTypes.PLAYER_SUCCESS:
    case actionTypes.UPDATE_PLAYER_SUCCESS:
      return {
        ...state,
        email: action.data.email,
        login: action.data.login,
        country: action.data.country,
        experience: action.data.experience,
      };
    case actionTypes.PLAYER_FAILURE:
    case actionTypes.LOG_IN_FAILURE:
    case actionTypes.REGISTER_FAILURE:
    case actionTypes.UPDATE_PLAYER_FAILURE:
    case actionTypes.RATING_FAILURE:
      return {
        ...state,
        errorMessage: action.message,
      };
    case actionTypes.RATING_SUCCESS:
      return {
        ...state,
        rating: [...action.data],
      };
    default:
      return state;
  }
}
