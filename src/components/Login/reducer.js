import { handleActions } from 'redux-actions';
import { LOGIN } from './actions';

const defaultState = {
  loggedIn: false
};

const loginReducer = handleActions({
  LOGIN: (state, action) => {
    return {
      loggedIn: true
    };
  }
}, defaultState)

export default loginReducer;
