import {LOGIN_USER, OTP_VERIFY, AUTH_USER} from '../actions/types';

const initialState = {
  loginSuccess: {},
  otpVerify: {},
  userData: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {...state, loginSuccess: action.payload};

    case OTP_VERIFY:
      return {...state, otpVerify: action.payload};

    case AUTH_USER:
      return {...state, userData: action.payload};

    default:
      return state;
  }
}
