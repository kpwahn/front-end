import { handleAction } from 'redux-actions';
import { GET_ANSWER } from './actions';

const defaultState = [];

const answerListReducer = handleAction(GET_ANSWER, (state, action) => {
  return action.payload.data.data;
}, defaultState);

export default answerListReducer;
