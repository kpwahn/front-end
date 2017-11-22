import axios from 'axios';
import { createAction } from 'redux-actions';

export const SET_QUIZ = 'SET_QUIZ';

const setActiveQuizAction = createAction(SET_QUIZ, function(quiz_id) {
  return quiz_id;
});

export default setActiveQuizAction;
