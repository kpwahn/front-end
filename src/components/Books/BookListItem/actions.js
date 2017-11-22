import axios from 'axios';
import { createAction } from 'redux-actions';

export const SET_BOOK = 'SET_BOOK';

const setActiveBookAction = createAction(SET_BOOK, function(book_id) {
  return book_id;
});

export default setActiveBookAction;
