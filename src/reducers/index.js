import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import loggedInReducer from '../components/Login/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  user: loggedInReducer
});

export default rootReducer;
