import { createAction, handleAction } from 'redux-actions';

export const SET_ACTIVE_QUIZ = 'SET_ACTIVE_QUIZ';

const setActiveQuizAction = createAction(SET_ACTIVE_QUIZ, function(name) {
  return { name };
});

export default setActiveQuizAction;
