import { JSON_CONTENT_TYPE } from '../constants/constants';
import { getAccessToken } from './access_credentials';

export function addAccessToken(config) {
  config.headers['Access-Token'] = getAccessToken();
  return config;
}

export function GetHeaders(withAccessToken = false) {
  const config = {
    headers: {
      'content-Type': JSON_CONTENT_TYPE,
    },
  };
  if (withAccessToken) { addAccessToken(config); }
  return config;
}
