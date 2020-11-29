import actionTypes from './actionTypes';

const initialState = {
  loggedIn: false,
  name: null,
  email: null,
  country: null,
  experience: 0,
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
      return state;
    case actionTypes.LOG_IN_FAILURE:
    case actionTypes.REGISTER_FAILURE:
      return { ...initialState };
    case actionTypes.LOG_IN_SUCCESS:
    case actionTypes.REGISTER_SUCCESS: {
      localStorage.setItem('token', action.data.token);
      return { ...state, loggedIn: true };
    }
    case actionTypes.LOGOUT: {
      localStorage.clear();
      return { ...initialState };
    }
    default:
      return state;
  }
}
