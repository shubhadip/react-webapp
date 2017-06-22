import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { API_URL, BARCODE_URL } from '../constants/api_urls';
import { GET_BARCODE_DETAILS } from './types';
import { GetHeaders } from '../credentials/request_headers';

export function getBarcodeDetails({ id }, callback) {
  return function (dispatch) {
    const headers = GetHeaders(true);
    const url = `${API_URL}${BARCODE_URL}/${id}`;
    axios.get(url, headers)
      .then((response) => {
        dispatch({
          type: GET_BARCODE_DETAILS,
          payload: response.data,
        });
        callback(null, response);
      }, (error) => {
        callback(null, error.response.data.error);
      });
  };
}
