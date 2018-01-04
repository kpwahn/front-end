import { handleAction } from 'redux-actions';
import { GET_ANSWER_KEY } from './actions';

const defaultState = [];

const answerKeyReducer = handleAction(GET_ANSWER_KEY, (state, action) => {
  return [...state, ...action.payload.data.data];
}, defaultState);

export default answerKeyReducer;
