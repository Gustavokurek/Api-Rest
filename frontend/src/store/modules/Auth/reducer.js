import * as types from '../types';

const initialState = {
  isloggedin: false,
  token: false,
  user: {},
  isLoanding: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      console.log('reducer', action.payload);
      return state;
    }

    default: {
      return state;
    }
  }
}
