import axios from 'axios';
import { createAction } from 'redux-actions';
import {url} from '../../../config';

export const GET_ANSWER_KEY = 'GET_ANSWER_KEY';

const getAnswerKeyAction = createAction(GET_ANSWER_KEY, function(quiz_id) {
    const request = axios.get(`${url}/api/books/xxxxx/quizzes/${quiz_id}/answer_key`);
    return request;
}, (question) => { return question});

export default getAnswerKeyAction;
