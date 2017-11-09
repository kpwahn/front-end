import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import loginReducer from '../components/Login/reducer';
import quizListReducer from '../components/QuizList/reducer'

const rootReducer = combineReducers({
  form: formReducer,
  user: loginReducer,
  quizList: quizListReducer
});

export default rootReducer;
