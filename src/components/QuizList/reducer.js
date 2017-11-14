import { handleAction } from 'redux-actions';
import { QUIZ_GET } from './actions';

const defaultState = [];

const quizListReducer = handleAction(QUIZ_GET, (state, action) => {
  return action.payload.data.data;
}, defaultState);

export default quizListReducer;
