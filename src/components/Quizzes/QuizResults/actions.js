import axios from 'axios';
import { createAction } from 'redux-actions';

export const GET_CORRECT_ANSWER = 'GET_CORRECT_ANSWER';

const getCorrectAnswersAction = createAction(GET_CORRECT_ANSWER, function(question) {
    const request = axios.get(`http://localhost:3000/api/books/xxxxx/quizzes/xxxxx/questions/${question.id}/answers?correct=true`);
    return request;
}, (question) => { return question});

export default getCorrectAnswersAction;
