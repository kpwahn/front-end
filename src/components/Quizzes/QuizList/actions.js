import axios from 'axios';
import { createAction } from 'redux-actions';
import {url} from '../../../config';

export const GET_QUIZ = 'GET_QUIZ';

const getQuizzesAction = createAction(GET_QUIZ, function(book) {
    const request = axios.get(`${url}/api/books/${book.activeBookId}/quizzes/`);
    return request;
});

export default getQuizzesAction;
