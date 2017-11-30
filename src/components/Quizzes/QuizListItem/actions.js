import axios from 'axios';
import { createAction } from 'redux-actions';

export const SET_QUIZ = 'SET_QUIZ';
export const INCREMENT_PAGE = 'INCREMENT_PAGE';
export const DECREMENT_PAGE = 'DECREMENT_PAGE';
export const RESET_PAGE = 'RESET_PAGE';

const setActiveQuizAction = createAction(SET_QUIZ, function(quiz) {
  return quiz;
});

const incrementPage = createAction(INCREMENT_PAGE, function(){
  return {};
});

const decrementPage = createAction(DECREMENT_PAGE, function(){
  return {};
});

const resetPage = createAction(RESET_PAGE, function(){
  return {};
});

export {resetPage}
export {setActiveQuizAction};
export {incrementPage};
export {decrementPage}
