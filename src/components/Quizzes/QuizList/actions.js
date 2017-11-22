import axios from 'axios';
import { createAction, handleAction } from 'redux-actions';

export const QUIZ_GET = 'QUIZ_GET';

const getQuizzesAction = createAction(QUIZ_GET, function(book) {
  const request = axios.get(`http://localhost:3000/api/books/${book.activeBook}/quizzes/`);
  return request;
});

export default getQuizzesAction;
