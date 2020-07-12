import React, { useState, version } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

//  screens
import  All from './AllTodos'


const Active = () => {
  return (
    <View>
      <Text>Active</Text>
    </View>
  );
};

const Completed = () => {
  return (
    <View>
      <Text>Completed</Text>
    </View>
  );
};

export default function Todos() {
  //this is where you are meant to set header let...
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'todos', title: 'Todos' },
    { key: 'active', title: 'Active' },
    { key: 'completed', title: 'Completed' },
  ]);
  const initialLayout = { width: Dimensions.get('window').width };

  const renderScene = SceneMap({
    todos: All,
    active: Active,
    completed: Completed,
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
