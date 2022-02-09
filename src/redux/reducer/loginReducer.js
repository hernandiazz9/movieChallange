import { LOGIN, LOGIN_OKEY, LOGIN_ERROR, GET_LOGIN, LOG_OUT } from "../types";

const inicialState = {
  loginLoading: false,
  loginError: null,
  user: false,
};

const loginReducer = (state = inicialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loginLoading: true };
    case LOGIN_OKEY:
      return { ...state, loginLoading: false, user: true };
    case LOGIN_ERROR:
      return { ...state, loginLoading: false, loginError: action.payload };
    case GET_LOGIN:
      return { ...state, user: true };
    case LOG_OUT:
      return { inicialState };


    default:
      return state;
  }
};

export default loginReducer;
