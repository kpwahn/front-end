import { handleAction, handleActions, combineActions } from 'redux-actions';
import { LOGIN, LOGOUT } from './actions';

const defaultState = {
  loggedIn: false,
  token: ''
};

// TODO do i even need the throw? (although it was cool to see how it works)
const loginReducer = handleAction(combineActions(LOGIN, LOGOUT), {
  next: (state, action) => {
    if (action.type === LOGIN) {
      let token = action.payload.data.token;

      if (token) {
        return {
          loggedIn: true,
          token: token
        };
      }
    } else if (action.type === LOGOUT) {
      return {
        loggedIn: false
      };
    }
  },
  throw: (state, action) => {
    return defaultState
  }
}, defaultState);

export default loginReducer;
