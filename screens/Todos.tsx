import React, { useState, version } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

//  screens
import  All from './AllTodos'
import Completed from './CompletedTodos'
import Filter from './ActiveTods'


export default function Todos() {
  //this is where you are meant to set header let...
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'todos', title: 'Todos' },
    { key: 'completed', title: 'Completed' },
    { key: 'filter', title: 'Filter' },
  ]);
  const initialLayout = { width: Dimensions.get('window').width };

  const renderScene = SceneMap({
    todos: All,
    completed: Completed,
    filter: Filter,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
