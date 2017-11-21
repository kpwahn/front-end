import axios from 'axios';
import { createAction, handleAction } from 'redux-actions';

export const GET_BOOKS = 'GET_BOOKS';

const getBooksAction = createAction(GET_BOOKS, function() {
  return axios.get('http://localhost:3000/api/books');
});

export default getBooksAction;
