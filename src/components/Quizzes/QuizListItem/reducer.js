import { handleActions } from 'redux-actions';
import { SET_QUIZ, INCREMENT_PAGE, DECREMENT_PAGE, RESET_PAGE } from './actions';

const defaultState = {page: 0};

const activeQuizReducer = handleActions({
  [SET_QUIZ]: (state, action) => (
    {...state, ...action.payload}
  ),
  [INCREMENT_PAGE]: (state, action) => {
    return {...state, page: state.page + 1}
  },
  [DECREMENT_PAGE]: (state, action) => {
    return {...state, page: state.page - 1}
  },
  [RESET_PAGE]: (state, action) => {
    return {...state, page: 0}
  }
}, defaultState);

export default activeQuizReducer;
