const initialState = {
  todos: {},
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE-TODO':
      return state;

      break;

    default:
      return state;
  }
};


export default todosReducer