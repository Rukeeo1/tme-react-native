import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Status from './Status';

interface ITodo {
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  isRecurring: boolean;
  id: string,
  priority: number;
}

const imageSource =
  'https://media-cdn.tripadvisor.com/media/photo-s/01/37/60/0c/me-and-my-husband-lekki.jpg';

function TodoItem({todo}: ITodo) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('TodoDetails',todo)}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: todo?.imageUri || imageSource }} style={styles.image} />
      </View>

      <View style={styles.todoDetails}>
        <Status todo={todo} />
        <View style={{ width: '100%', paddingVertical: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            {todo?.title}
          </Text>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: 'grey' }}>
              {todo?.description?.slice(0, 30)}...
            </Text>
          </View>
        </View>
        <Text style={{ color: 'grey', fontSize: 10, fontWeight: '300' }}>
          {new Date(todo?.dueDate).toDateString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 130,
    flexDirection: 'row',
    width: Dimensions.get('window').width - 20,
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  
 
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  todoDetails: {
    flex: 1,
    paddingHorizontal: 5,
    justifyContent: 'center',
    position: 'relative',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    right: 10,
    top: 30,
  },
  statusText: {
    backgroundColor: '#d4ead7',
    color: '#01d02e',
    padding: 4,
    borderRadius: 6,
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default TodoItem;
