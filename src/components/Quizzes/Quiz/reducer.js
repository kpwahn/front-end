import { handleAction } from 'redux-actions';
import { GET_QUESTIONS } from './actions';

const defaultState = [];

const questionsReducer = handleAction(GET_QUESTIONS, (state, action) => {
  return action.payload.data.data;
}, defaultState);

export default questionsReducer;
