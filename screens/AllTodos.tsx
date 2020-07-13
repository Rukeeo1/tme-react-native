import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native';
//components
import TodoItem from '../components/TodoItem';
import Navigation from '../components/Navigation';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../store/actions/todos';
import Empyty from '../components/EmtpyState';

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
  const { todos, loading } = useSelector((state) => state);
  // sort by time
  const sorted = todos.todos.sort((a: object, b: object) => {
    const aDates = new Date(a.dueDate).getTime();
    const bDates = new Date(b.dueDate).getTime();
    return aDates < bDates ? 1 : -1;
  });

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
        <ScrollView contentContainerStyle={styles.container}>
          {sorted?.map((todo: ITodo, index: number) => (
            <React.Fragment key={index}>
              <TodoItem todo={todo} />
            </React.Fragment>
          ))}
          <View style={{flex:1, marginTop:'10%'}}>

        {sorted.length < 1 && <Empyty />}
          </View>
        </ScrollView>
      
        </>
      )}
      <Navigation />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 60,
    backgroundColor: '#fff',
  },
});
