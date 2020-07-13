import React, { useState, version, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar, } from 'react-native-tab-view';
import { useNavigation, useRoute } from '@react-navigation/native';

//  screens
import All from './AllTodos';
import Completed from './CompletedTodos';
import Filter from './ActiveTods';

export default function Todos() {
  //this is where you are meant to set header let...
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'todos', title: 'Todos' },
    { key: 'completed', title: 'Completed' },
    { key: 'filter', title: 'Filter' },
  ]);
  // const initialLayout = { width: Dimensions.get('window').width };

  const renderScene = SceneMap({
    todos: All,
    completed: Completed,
    filter: Filter,
  });
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={styles.headerLeft}>
          <Text style={styles.headerLeftText}>{route?.params?.name}</Text>
        </View>
      ),
    });
  }, []);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      // initialLayout={initialLayout}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          activeColor="black"
          scrollEnabled
          inactiveColor="#ccc"
          indicatorStyle={{ borderBottomWidth: 2 }}
          style={{ backgroundColor: 'white' }}
          labelStyle={{
            textTransform: 'capitalize',
          }}
      
        />
      )}
    
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerLeft: {
    paddingLeft: 20,
  },
  headerLeftText: { fontSize: 17, fontWeight: '500' },
});
