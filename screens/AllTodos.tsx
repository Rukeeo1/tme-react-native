import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
//components
import TodoItem from '../components/TodoItem';
import Navigation from '../components/Navigation';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../store/actions/todos';
import Todos from './Todos';

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
  // sort by time
  const sorted = todos.sort((a: object, b: object) => {
    const aDates = new Date(a.dueDate).getTime();
    const bDates = new Date(b.dueDate).getTime();
    return aDates < bDates ? 1 : -1;
  });

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        {sorted?.map((todo: ITodo, index: number) => (
          <React.Fragment key={index}>
            <TodoItem todo={todo} />
          </React.Fragment>
        ))}
      </ScrollView>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 60,
  },
});
