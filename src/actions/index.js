import axios from 'axios';
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
