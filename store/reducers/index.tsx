import { combineReducers } from 'redux';

import todosReducer from './todos'
import users from './user'
import loading from './handleLoading'



export default combineReducers({
  todos: todosReducer,
  users,
  loading
});
