import axios from 'axios';
import { createAction, handleAction } from 'redux-actions';

export const LOGIN = 'LOGIN'

const loginAction = createAction(LOGIN, function(formValues) {
  const request = axios.post(`http://localhost:3002`, {
      email: formValues.email,
      password: formValues.password
    });

  return request;
});

export default loginAction;
