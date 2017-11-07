import { LOGIN } from "./actions";

const INITIAL_STATE = {
  isLoggedIn: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {...state, isLoggedIn: true};
    default:
      return state;
  }
}
