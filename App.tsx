import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Todos from './screens/Todos';
import TodoDetails from './screens/TodoDetails'
import AddTodo from './screens/AddTodo'

//mapping for routes...
export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Todos: undefined;
  TodoDetails: undefined;
  AddTodo: undefined
};

// create stack navigator
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const { Navigator, Screen } = Stack;

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Screen
          name="Todos"
          component={Todos}
          options={{
            title: '',
            headerTintColor: '#fff',
            headerLeft: () => (
              <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>Rukee Ojigbo</Text>
              </View>
            ),
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Screen
          name="TodoDetails"
          component={TodoDetails}
        />
        <Screen
          name="AddTodo"
          component={AddTodo}
        />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextContainer: {
    paddingLeft: 10,
  },
  headerText: {
    // color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
