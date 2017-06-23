import Cookies from 'universal-cookie';
import { Base64 } from '../constants/constants';

function setCookie(key, value) {
  const cookies = new Cookies();
  const expiryDateTime = new Date();
  expiryDateTime.setDate(expiryDateTime.getDate() + 1);
  cookies.set(key, value, { path: '/', expires: expiryDateTime });
}

export function getFromCookie(key) {
  const cookies = new Cookies();
  return cookies.get(key);
}

export function saveAccessCredentials(values) {
  setCookie('email', values.email);
  setCookie('token', values.token);
  setCookie('name', values.first_name);
  const accessToken = Base64.encode(`${values.token.trim()}:${values.email.trim()}`);
  setCookie('Access-Token', accessToken);
}

export function getToken() {
  return getFromCookie('token');
}

export function getAccessToken() {
  return getFromCookie('Access-Token');
}

export function getEmail() {
  return getFromCookie('email');
}

export function deleteToken() {
  const cookies = new Cookies();
  cookies.remove('token');
  cookies.remove('email');
  cookies.remove('Access-Token');
  cookies.remove('name');
}
