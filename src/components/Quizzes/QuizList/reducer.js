import { handleAction } from 'redux-actions';
import { GET_QUIZ } from './actions';

const defaultState = [];

const quizListReducer = handleAction(GET_QUIZ, (state, action) => {
  return action.payload.data.data;
}, defaultState);

export default quizListReducer;
