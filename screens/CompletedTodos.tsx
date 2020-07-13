import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
//components
import TodoItem from '../components/TodoItem';
import Navigation from '../components/Navigation'

//redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../store/actions/todos';


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

  
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          {todos?.map((todo: ITodo, index: number) => (
            <React.Fragment key={index}>
              {todo.isCompleted && <TodoItem todo={todo}  />}
            </React.Fragment>
          ))}
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
  