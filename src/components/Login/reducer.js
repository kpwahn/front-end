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
  next(state, action) {console.log("here")},
  throw(state, action) {console.log("there")},
}, defaultState)

export default loginReducer;
