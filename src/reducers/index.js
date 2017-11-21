import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import loginReducer from '../components/Login/reducer';
import bookListReducer from '../components/BookList/reducer';
import quizListReducer from '../components/QuizList/reducer';
import activeQuizReducer from '../components/Quiz/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  user: loginReducer,
  bookList: bookListReducer,
  quizList: quizListReducer,
  activeQuiz: activeQuizReducer
});

export default rootReducer;
