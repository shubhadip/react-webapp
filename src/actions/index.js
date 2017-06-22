import axios from 'axios';
<<<<<<< Updated upstream
import React from 'react';
import history from '../history.js';
import { AUTH_USER, AUTH_ERROR, LOGOUT_USER, FETCH_ADMIN_USERS, UPDATE_ADMIN_USERS_STATUS, HIGHLIGHT_ADMIN_USERS_STATUS } from './types';
import { API_URL, AUTHENTICATION_URL, DASHBOARD_URL, ADMIN_LIST_URL, ADMIN_UPDATE_URL } from '../constants/api_urls';
import { saveAccessCredentials, deleteToken } from '../credentials/access_credentials';
import { GetHeaders } from '../credentials/request_headers';
import { API_TOKEN } from '../constants/constants';
import { toastr } from 'react-redux-toastr';

axios.defaults.headers.common.api_token = API_TOKEN;

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
        dispatch(authError(error.response.data.error));
      });
  };
}

export function signoutUser() {
  deleteToken();
  history.push('/');
  return { type: LOGOUT_USER };
}

export function fetchMessage() {
  return function (dispatch) {
    const headers = GetHeaders(true);
    axios.get(`${API_URL}${ADMIN_LIST_URL}`, headers)
      .then((response) => {
        dispatch({
          type: FETCH_ADMIN_USERS,
          payload: response.data,
        });
      });
  };
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
      .catch(() => {
        toastr.warning('Invalid Credentials...');
        dispatch(authError('Invalid Credentials ...'));
      });
  };
}

export function updateAdminStatus({id, status}){
  return function (dispatch) {
    const headers = GetHeaders(true);
    const query_params = {
      admin_user: {
        enable: !status
      },
    };
    const url = `${API_URL}${ADMIN_UPDATE_URL}/${id}`;
    axios.patch(url, query_params, headers)
      .then((response)=>{
        toastr.warning('AdminUser Removed Successfully');
        console.log("index",response.data);
        dispatch({
          type: UPDATE_ADMIN_USERS_STATUS,
          payload: response.data
        });
      })
      .catch(()=>{

      })
  }
}

export function highlightAdminStatus({id, status}){
  return function (dispatch) {
    const headers = GetHeaders(true);
    const query_params = {
      admin_user: {
        enable: !status
      },
    };
    const url = `${API_URL}${ADMIN_UPDATE_URL}/${id}`;
    axios.patch(url, query_params, headers)
      .then((response)=>{
        toastr.success('Status Updated successfully');
        dispatch({
          type: HIGHLIGHT_ADMIN_USERS_STATUS,
          payload: response.data
        });
      })
      .catch(()=>{

      })
  }
}


=======
import { toastr } from 'react-redux-toastr';
import { API_TOKEN } from '../constants/constants';
import { authError, signupUser, signinUser, signoutUser } from './auth_actions';
import { fetchMessage, updateAdminStatus, highlightAdminStatus } from './admin_actions';

axios.defaults.headers.common.api_token = API_TOKEN;

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if ([500, 501, 502, 503, 503].indexOf(error.response.status) > -1) {
    toastr.warning('Something went wrong try again later ...');
  }
  return Promise.reject(error);
});

export { authError };
export { signupUser };
export { signoutUser };
export { signinUser };

export { fetchMessage };
export { updateAdminStatus };
export { highlightAdminStatus };
>>>>>>> Stashed changes
