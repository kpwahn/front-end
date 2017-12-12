import { handleAction } from 'redux-actions';
import { GET_CORRECT_ANSWER } from './actions';

const defaultState = [];

const correctAnswerListReducer = handleAction(GET_CORRECT_ANSWER, (state, action) => {
  if(action.meta.first){
    state = defaultState;
  }
  return [...state, {answer: action.payload.data.data[0], question: action.meta.question}];
}, defaultState);

export default correctAnswerListReducer;
