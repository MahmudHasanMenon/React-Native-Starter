import axios from '../../config/axios';
import {LOGIN_USER, OTP_VERIFY, AUTH_USER} from './types';

export function loginUser(data) {
  const response = axios({
    method: 'post',
    url: '/auth/login',
    data: {
      phoneNumber: data.phoneNumber,
    },
  }).then(result => result.data);

  return {
    type: LOGIN_USER,
    payload: response,
  };
}

export function otpVerify(data) {
  const response = axios({
    method: 'post',
    url: '/auth/otpVerify',
    data: {
      phoneNumber: `+880${data.phoneNumber}`,
      otp: data.otp,
    },
  }).then(result => {
    result.data;
  });

  return {
    type: OTP_VERIFY,
    payload: response,
  };
}

export function auth() {
  const request = axios.get('/auth').then(response => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}
