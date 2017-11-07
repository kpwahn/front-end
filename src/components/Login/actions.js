import axios from 'axios';

export const LOGIN = 'LOGIN';

export function login() {
  const request = axios.post(`http://localhost:3000/api/authenticate`, {});

  return {
    type: LOGIN,
    payload: request
  };
}
