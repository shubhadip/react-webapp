import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import history from '../history';
import { AUTH_USER, AUTH_ERROR, LOGOUT_USER } from './types';
import { API_URL, AUTHENTICATION_URL } from '../constants/api_urls';
import { saveAccessCredentials, deleteToken } from '../credentials/access_credentials';
import { GetHeaders } from '../credentials/request_headers';

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}

export function signupUser({ email, password }) {
  return function (dispatch) {
    axios.post(`${API_URL}/signup`, { email, password })
      .then((response) => {
        dispatch({ type: AUTH_USER });
        saveAccessCredentials(response.data);
        history.push('/feature');
      })
      .catch((error) => {
        dispatch(authError(error.response.data.error.message));
      });
  };
}

export function signoutUser() {
  deleteToken();
  history.push('/');
  return { type: LOGOUT_USER };
}

export function signinUser({ email, password }) {
  return function (dispatch) {
    const auth = {
      authentication: {
        email,
        password,
      },
    };
    const headers = GetHeaders(false);
    axios.post(`${API_URL}${AUTHENTICATION_URL}`, auth, headers)
      .then((response) => {
        dispatch({
          type: AUTH_USER,
        });
        saveAccessCredentials(response.data);
        history.push('/feature');
      })
      .catch((error) => {
        dispatch(authError(error.response.data.error.message));
      });
  };
}

