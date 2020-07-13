import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements'; // 0.16.0
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Navigation from '../components/Navigation';

// navigation
import { useNavigation, useRoute } from '@react-navigation/native';

//redux
import { updateTodo, deleteTodo } from '../store/actions/todos';
import { useDispatch, useSelector } from 'react-redux';
const imageSource =
  'https://www.w3schools.com/html/img_girl.jpg';

export default function TodoDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  const { params } = route;

  //find object from state
  const todo = todos.filter((todo) => todo.id === params?.id);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ paddingRight: 15 }}>
          <MaterialCommunityIcons
            name="delete-outline"
            size={24}
            color="grey"
            onPress={() => handleDeleteTodo(params?.id)}
          />
        </View>
      ),
    });
  }, []);

  const handleToggleComplete = (e) => {
    let updateTodoObject = {
      ...params,
    };
    if (e) {
      updateTodoObject.isCompleted = false;
    } else {
      updateTodoObject.isCompleted = true;
    }
    dispatch(updateTodo(updateTodoObject));
  };

  const handleDeleteTodo = (todoId) => {
    Alert.alert('', 'Are you sure, you want to delete this todo?', [
      {
        text: 'Dismiss',
      },
      {
        text: 'Delete',
        onPress: () => dispatch(deleteTodo(todoId, navigation)),
      },
    ]);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <ImageBackground
            source={{ uri: todo[0]?.imageUri || imageSource  }}
            style={{
              height: 300,
              resizeMode: 'cover',
            }}
          >
            <LinearGradient
              colors={['rgba(0,0,0,0.4)', 'transparent', 'rgba(0,0,0,0.9)']}
              style={styles.linearGradient}
            >
              <Text style={styles.title}>{todo[0]?.title}</Text>
              <Text style={styles.date}>
                {new Date(todo[0]?.dueDate).toDateString()}
              </Text>
            </LinearGradient>
            <EditIcon navigation={navigation} todo={todo} />
          </ImageBackground>
          <View>
            <View>
              <CheckBox
                title={todo[0]?.isCompleted ? 'Completed' : 'Mark as complete'}
                checked={todo[0]?.isCompleted || false}
                onPress={() => handleToggleComplete(todo[0]?.isCompleted)}
              />
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={{ fontWeight: '600', fontSize: 16, marginTop: 10 }}>
                Description
              </Text>
            </View>
            <Text
              style={{
                fontWeight: '300',
                fontSize: 16,
                marginTop: 10,
                color: 'grey',
                textAlign: 'justify',
                lineHeight: 20,
              }}
            >
              {todo[0]?.description}
            </Text>
          </View>
        </View>
      </ScrollView>
      <Navigation />
    </View>
  );
}

const EditIcon = ({ navigation, todo }) => (
  <View style={{ position: 'absolute', bottom: 0, right: 10 }}>
    <TouchableOpacity
      style={styles.iconWrapper}
      onPress={() => navigation.navigate('UpdateTodo', todo[0])}
    >
      <AntDesign name="edit" size={24} color="#fff" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '90%',
    marginVertical: 10,
    borderRadius: 8,
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    bottom: 23,
    color: 'white',
    marginLeft: 10,
    fontSize: 28,
    fontWeight: 'bold',
  },
  iconWrapper: {
    backgroundColor: 'grey',
    padding: 10,
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
  },
  date: {
    fontSize: 12,
    marginLeft: 12,
    color: '#fff',
    position: 'absolute',
    bottom: 12,
  },
});
