import axios from 'axios';
import { createAction } from 'redux-actions';

export const GET_ANSWER = 'GET_ANSWER';

const getAnswersAction = createAction(GET_ANSWER, function(question) {
    const request = axios.get(`http://localhost:3000/api/books/xxxxx/quizzes/xxxxx/questions/${question.id}/answers/`);
    return request;
});

export default getAnswersAction;
