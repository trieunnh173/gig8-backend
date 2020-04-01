import { LOGIN_USER, LOGIN_USER_FULFILLED, LOGIN_USER_FAILED } from "../actions/user.actions";


const initialState = {
  user: {},
  loading: false,
  error: ''
};
export default function loadUsersReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, {
        loading: true,
      });
    case LOGIN_USER_FULFILLED:
      return Object.assign({}, state, {
        loading: false,
        user: action.user
      });
    case LOGIN_USER_FAILED:
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      });
    default:
      return state;
  }
}