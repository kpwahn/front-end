import { createAction, handleAction } from 'redux-actions';
import axios from 'axios';
import {url} from '../../../config';

export const GET_QUESTIONS = 'GET_QUESTIONS';

const getQuestionsAction = createAction(GET_QUESTIONS, function(obj) {
  const request = axios.get(`${url}/api/books/${obj.activeBook.id}/quizzes/${obj.activeQuiz.id}/questions/`);
  return request;
});

export default getQuestionsAction;
