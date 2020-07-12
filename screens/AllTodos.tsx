import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
//components
import TodoItem from '../components/TodoItem';

const todos = [
  {
    title: 'Laundry',
    description:
      "I am using react native swiper. and this error was shown I don't know why. How can it be solved? In the past, there was not a problem like this. Its first time happening. What is wrong?",
    dueDate: '12-July-2020',
    isCompleted: false,
  },
  {
    title: 'Date With Aina',
    description:
      "I am using react native swiper. and this error was shown I don't know why. How can it be solved? In the past, there was not a problem like this. Its first time happening. What is wrong?",
    dueDate: '18-July-2020',
    isCompleted: true,
  },
  {
    title: 'Reading Typescript',
    description:
      "I am using react native swiper. and this error was shown I don't know why. How can it be solved? In the past, there was not a problem like this. Its first time happening. What is wrong?",
    dueDate: '18-July-2020',
    isCompleted: true,
  },
  {
    title: 'Reading Javascript',
    description:
      "I am using react native swiper. and this error was shown I don't know why. How can it be solved? In the past, there was not a problem like this. Its first time happening. What is wrong?",
    dueDate: '18-July-2020',
    isCompleted: false,
  },
];

interface ITodo {
    title: string,
    description: string,
    dueDate: string,
    isCompleted: boolean

}

export default function AllTodos() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {todos.map((todo:ITodo, index) => (
        <React.Fragment key={index}>
          <TodoItem todo={todo} />
        </React.Fragment>
      ))}
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
});
