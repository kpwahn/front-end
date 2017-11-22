import { handleAction } from 'redux-actions';
import { GET_BOOKS } from './actions';

const defaultState = [];

const bookListReducer = handleAction(GET_BOOKS, (state, action) => {
  return [...action.payload.data.data];
}, defaultState);

export default bookListReducer;
