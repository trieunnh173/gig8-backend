import { combineReducers } from 'redux';
import loadUsersReducer from './user.reducers';
const reducer = combineReducers(
  {
    usersState: loadUsersReducer,
  }
);

export default reducer;