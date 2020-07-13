import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function EmtpyState({ displayMessage, onPress }) {
  const message = displayMessage || "You haven't added todos at the moment";

 const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View>
        <Text>{message}</Text>
        <TouchableOpacity
          style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
          onPress={() => navigation.navigate('AddTodo')}
        >
          <Text style={styles.textStyle}>Add To Do</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
