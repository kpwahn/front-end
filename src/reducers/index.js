import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import loginReducer from '../components/Login/reducer';
import activeBookReducer from '../components/Books/BookListItem/reducer';
import bookListReducer from '../components/Books/BookList/reducer';
import quizListReducer from '../components/Quizzes/QuizList/reducer';
import activeQuizReducer from '../components/Quizzes/QuizListItem/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  user: loginReducer,
  activeBook: activeBookReducer,
  bookList: bookListReducer,
  quizList: quizListReducer,
  activeQuiz: activeQuizReducer
});

export default rootReducer;
