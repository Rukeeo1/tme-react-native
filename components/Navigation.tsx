import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Navigation() {
const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchContainer} onPress={() => navigation.navigate('Todos')}>
        <FontAwesome name="home" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchContainer} onPress={() => navigation.navigate('AddTodo')}>
        <Entypo name="add-to-list" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '0.06%',
    backgroundColor: '#fff',
    height: 60,
    flexDirection: 'row',
    borderTopWidth: 2,
    borderTopColor: 'transparent',

    // justifyContent:'space-between'
  },
  touchContainer: {
    borderRightColor: 'grey',
    borderRightWidth: 0.5,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
