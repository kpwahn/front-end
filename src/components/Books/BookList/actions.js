import axios from 'axios';
import { createAction, handleAction } from 'redux-actions';
import {url} from '../../../config';

export const GET_BOOKS = 'GET_BOOKS';

const getBooksAction = createAction(GET_BOOKS, function() {
  return axios.get(`${url}/api/books`);
});

export default getBooksAction;
