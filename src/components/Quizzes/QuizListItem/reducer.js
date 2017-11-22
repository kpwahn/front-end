import { handleAction } from 'redux-actions';
import { SET_QUIZ } from './actions';

const defaultState = {};

const activeQuizReducer = handleAction(SET_QUIZ, (state, action) => {
  return {...state, ...action.payload}
}, defaultState);

export default activeQuizReducer;
