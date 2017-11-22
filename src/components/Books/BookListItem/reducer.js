import { handleAction } from 'redux-actions';
import { SET_BOOK } from './actions';

const defaultState = {};

const activeBookReducer = handleAction(SET_BOOK, (state, action) => {
  return {...state, ...action.payload}
}, defaultState);

export default activeBookReducer;
