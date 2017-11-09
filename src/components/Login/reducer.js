import { handleAction, handleActions, combineActions } from 'redux-actions';
import { LOGIN, LOGOUT } from './actions';

const defaultState = {
  loggedIn: false,
  token: ''
};

const loginReducer = handleAction(combineActions(LOGIN, LOGOUT), {
  next: (state, action) => {
    if (action.type === LOGIN) {
      let token = action.payload.data.token;

      if (token) {
        return {
          loggedIn: true,
          token: token
        };
      } else {
        //TODO invalid username or password
        return defaultState;
      }
    } else if (action.type === LOGOUT) {
      return {
        loggedIn: false
      };
    } else {
      return defaultState
    }
  },
  throw: (state, action) => {
    //TODO handle error, please try again or something like that
    return defaultState
  }
}, defaultState);

export default loginReducer;
