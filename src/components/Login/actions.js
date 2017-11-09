import axios from 'axios';
import { createAction, handleAction } from 'redux-actions';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const loginAction = createAction(LOGIN, function(formValues) {
  const request = axios.post(`http://localhost:3000/api/authenticate`, {
      email: formValues.email,
      password: formValues.password
    });

  return request;
});

const logoutAction = createAction(LOGOUT, function() {
  return {};
});

export { loginAction, logoutAction };
