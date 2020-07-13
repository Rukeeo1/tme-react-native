import axios from 'axios';
import { FETCH_TODOS, FILTER_TODOS, UPDATE_TODO, DELETE_TODO } from '../types/';
import store from '../index';
import * as firebase from 'firebase';
import 'firebase/firestore';
import Todos from '../../screens/Todos';



export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://react-native-test-tme.firebaseio.com/todos.json`
    );
    const results = response.data;
    let todos = [];
    for (let key in results) {
      todos.push({
        ...results[key],
        id: key,
      });
    }
    dispatch({
      type: FETCH_TODOS,
      payload: todos,
    });
  } catch (error) {
    alert('there was an error');
  }
};

export const addTodo = (payload, navigation) => async (dispatch) => {
  try {
    let data = JSON.stringify(payload);
    await axios.post(
      `https://react-native-test-tme.firebaseio.com/todos.json`,
      data
    );
    alert('Todo added sucessfully');
    navigation.navigate('Todos');
    dispatch(fetchTodos());
  } catch (error) {
    alert(error.message || error.response.message);
  }
};

export const filterTodo = (query: string) => async (
  dispatch: Function,
  store
) => {
  const { todos } = store().todos;
  let sortedTodos;
  try {
    switch (query) {
      case 'priority':
        sortedTodos = todos?.sort((a: object, b: object) =>
          a.priority < b.priority ? 1 : -1
        );
        break;
      case 'today': {
        sortedTodos = todos?.map((todo) => {
          const today = new Date().toDateString();
          const dueDate = new Date().toDateString();
          if (today == dueDate) {
            return todo;
          }
        });
      }

      case 'pending':
        sortedTodos = todos.filter((todo) => {
          if (!todo.isCompleted) {
            return todo;
          }
        });
        break;

      case 'overdue':
        // sortedTodos = todos?.map((todo) => {
        //   const today = new Date().getTime();
        //   const dueDate = new Date().getTime();
        //   if (!todo.isCompleted && dueDate < today) {
        //     return todo;
        //   }
        // });
        const today = new Date().getTime();
        console.log(new Date(),'this is today')
        sortedTodos = todos?.filter((todo) => {
          const dueDate = new Date(todo.dueDate).getTime()
          console.log(dueDate,'this is due date')
          if (!todo.isCompleted && dueDate < today) {
            return todo;
          }
        });
        break;

      default:
        sortedTodos = todos;
        break;
    }
    dispatch({
      type: FILTER_TODOS,
      payload: sortedTodos,
    });
  } catch (error) {
    const errorMessage = error.response || error.message;
    alert();
  }
};

export const updateTodo = (data, navigation) => async (dispatch, store) => {
  const { todos } = store().todos;

  try {
    const response = await axios.put(
      `https://react-native-test-tme.firebaseio.com/todos/${data.id}.json`,
      data
    );
    alert('Todo updated sucessfully');
    dispatch(fetchTodos());

    // const updatedTodoLists = todos.map(todo => {

    //   console.log(data.id,'this is data and id')
    //   if(todo.id == data.id){
    //     console.log(todo,'+++++++++++=====')
    //     todo = data
    //   }
    //   return todo
    // })
    // console.log(updatedTodoLists,'updated todo lists')

    // dispatch({
    //   type: UPDATE_TODO,
    //   payload: updatedTodoLists,
    // });
    // find todo in the list of ids and return new array
    navigation.navigate('Todos');
  } catch (error) {}
};

export const deleteTodo = (id: string, navigation) => async (
  dispatch,
  store
) => {
  const { todos } = store().todos;
  try {
    const response = await axios.delete(
      `https://react-native-test-tme.firebaseio.com/todos/${id}.json`
    );
    alert('Todo deleted successfully');
    navigation.navigate('Todos');

    const todosAfterDelete = todos.filter((todo) => todo.id !== id);

    dispatch(fetchTodos());
  } catch (error) {}
};
