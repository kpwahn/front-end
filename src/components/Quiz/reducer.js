import { handleAction } from 'redux-actions';
import { SET_ACTIVE_QUIZ } from './actions';

const defaultState = {
  name: ""
};

const activeQuizReducer = handleAction(SET_ACTIVE_QUIZ, (state, action) => {
  return {...state, name: action.payload.name}
}, defaultState);

export default activeQuizReducer;
