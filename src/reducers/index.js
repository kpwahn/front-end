import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import loginReducer from '../components/Login/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  user: loginReducer
});

export default rootReducer;
