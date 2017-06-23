import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { API_TOKEN } from '../constants/constants';
import { authError, signupUser, signinUser, signoutUser } from './auth_actions';
import { fetchMessage, updateAdminStatus, highlightAdminStatus } from './admin_actions';
import { getOrderStatuses } from './order_actions';

axios.defaults.headers.common['Api-Token'] = API_TOKEN;

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if ([500, 501, 502, 503, 503].indexOf(error.response.status) > -1) {
    toastr.warning('Something went wrong try again later ...');
  } else if (error.response.status === 401 && error.response.data.error.code === 10) {
    signoutUser();
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

export { getOrderStatuses };
