// import { handleActions } from 'redux-actions';
import { handleAction } from 'redux-actions';
import { LOGIN } from './actions';

const defaultState = {
  loggedIn: false
};

// const loginReducer = handleActions({
//   LOGIN: (state, action) => {
//     return {
//       loggedIn: true
//     };
//   }
// }, defaultState)

const loginReducer = handleAction(LOGIN, {
  next(state, action) {
    return {
      loggedIn: true
    };
  },
  throw(state, action) {
    console.log('failed')
    return defaultState
  },
}, defaultState)

export default loginReducer;
