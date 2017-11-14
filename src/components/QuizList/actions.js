import axios from 'axios';
import { createAction, handleAction } from 'redux-actions';

export const QUIZ_GET = 'QUIZ_GET';

const getQuizAction = createAction(QUIZ_GET, function(token) {
  const request = axios.get('http://localhost:3000/api/quiz');

  return request;
});

export default getQuizAction;
