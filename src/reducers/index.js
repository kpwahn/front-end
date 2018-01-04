import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import loginReducer from '../components/Login/reducer';
import activeBookReducer from '../components/Books/BookListItem/reducer';
import bookListReducer from '../components/Books/BookList/reducer';
import quizListReducer from '../components/Quizzes/QuizList/reducer';
import activeQuizReducer from '../components/Quizzes/QuizListItem/reducer';
import questionsReducer from '../components/Quizzes/Quiz/reducer';
import answerListReducer from '../components/Quizzes/QuizQuestion/reducer';
import answerKeyReducer from '../components/Quizzes/QuizResults/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  user: loginReducer,
  activeBook: activeBookReducer,
  bookList: bookListReducer,
  activeQuiz: activeQuizReducer,
  quizList: quizListReducer,
  questionList: questionsReducer,
  answerList: answerListReducer,
  answerKey: answerKeyReducer
});

export default rootReducer;
