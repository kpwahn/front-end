import axios from 'axios';

export const LOGIN = 'LOGIN';

export function login(formValues) {
  const request = axios.post(`http://localhost:3000/api/authenticate`, {
    email: formValues.email,
    password: formValues.password
  });

  return {
    type: LOGIN,
    payload: request
  };
}
