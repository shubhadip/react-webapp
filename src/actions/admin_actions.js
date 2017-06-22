import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { API_URL, ADMIN_LIST_URL, ADMIN_UPDATE_URL } from '../constants/api_urls';
import { FETCH_ADMIN_USERS, UPDATE_ADMIN_USERS_STATUS, HIGHLIGHT_ADMIN_USERS_STATUS } from './types';
import { GetHeaders } from '../credentials/request_headers';

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

export function updateAdminStatus({ id, status }) {
  return function (dispatch) {
    const headers = GetHeaders(true);
    const queryParams = {
      admin_user: {
        enable: !status,
      },
    };
    const url = `${API_URL}${ADMIN_UPDATE_URL}/${id}`;
    axios.patch(url, queryParams, headers)
      .then((response) => {
        toastr.warning('AdminUser Removed Successfully');
        dispatch({
          type: UPDATE_ADMIN_USERS_STATUS,
          payload: response.data,
        });
      });
  };
}

export function highlightAdminStatus({ id, status }) {
  return function (dispatch) {
    const headers = GetHeaders(true);
    const queryParams = {
      admin_user: {
        enable: !status,
      },
    };
    const url = `${API_URL}${ADMIN_UPDATE_URL}/${id}`;
    axios.patch(url, queryParams, headers)
      .then((response) => {
        toastr.success('Status Updated successfully');
        dispatch({
          type: HIGHLIGHT_ADMIN_USERS_STATUS,
          payload: response.data,
        });
      });
  };
}
