import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
//components
import TodoItem from '../components/TodoItem';
import Navigation from '../components/Navigation';
import Empty from '../components/EmtpyState';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../store/actions/todos';
import EmtpyState from '../components/EmtpyState';

interface ITodo {
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
}

export default function AllTodos() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  const { todos } = useSelector((state) => state?.todos);

  const completedTodos = todos?.filter((todo: ITodo, index: number) => {
    if (todo.isCompleted) {
      return (
        <React.Fragment key={index}>
          {todo.isCompleted && <TodoItem todo={todo} />}
        </React.Fragment>
      );
    }
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.container}>
        {
          todos?.map((todo, index) => {
            return (
              <React.Fragment key={index}>
                {todo.isCompleted && <TodoItem todo={todo} />}
              </React.Fragment>
            );
          })
        }
        {completedTodos.length < 1 ? <Empty /> : null}
      </ScrollView>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
});
