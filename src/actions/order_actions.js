import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { API_URL, ORDER_STATUS_URL } from '../constants/api_urls';
import { ORDER_STATUSES } from './types';
import { GetHeaders } from '../credentials/request_headers';

export function getOrderStatuses() {
  return function (dispatch) {
    const headers = GetHeaders(true);
    const url = `${API_URL}${ORDER_STATUS_URL}`;
    axios.get(url, headers)
      .then((response) => {
        dispatch({
          type: ORDER_STATUSES,
          payload: response.data,
        });
      }, (error) => {
        toastr.warning(error.response.data.error);
      });
  };
}

