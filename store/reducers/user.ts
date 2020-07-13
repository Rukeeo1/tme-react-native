import { FETCH_TODOS, FILTER_TODOS, UPDATE_TODO, DELETE_TODO } from '../types';
const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case FILTER_TODOS:
      return {
        ...state,
        sortedTodos: action.payload,
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos:action.payload
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: action.payload
      }


    default:
      return state;
  }
};

export default usersReducer;
