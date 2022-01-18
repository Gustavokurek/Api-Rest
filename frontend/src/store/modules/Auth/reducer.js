import * as types from '../types';

const initialState = {
  isloggedin: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      // mudando as configurações de estado quando o login é feito
      const newState = { ...state };
      newState.isloggedin = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.isLoading = false;

      return newState;
    }
    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }
    case types.LOGIN_FAILURE: {
      // deslogando retornando state inicial quando há falha no login
      const newState = { ...initialState };
      return newState;
    }

    default: {
      return state;
    }
  }
}
