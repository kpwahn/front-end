import { handleAction } from 'redux-actions';
import { SET_BOOK } from './actions';

const defaultState = {
  name: undefined,
  activeBookId: undefined
};

const activeBookReducer = handleAction(SET_BOOK, (state, action) => {
  return {
    ...state,
    name: action.payload.name,
    activeBookId: action.payload.activeBookId
  }
}, defaultState);

export default activeBookReducer;
