import axios from 'axios';
import { createAction } from 'redux-actions';

export const GET_QUIZ = 'GET_QUIZ';

const getQuizzesAction = createAction(GET_QUIZ, function(book) {
    const request = axios.get(`http://localhost:3000/api/books/${book.activeBook}/quizzes/`);
    return request;
});

export default getQuizzesAction;
