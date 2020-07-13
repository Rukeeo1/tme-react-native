import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Picker,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
//components
import TodoItem from '../components/TodoItem';
import Navigation from '../components/Navigation';
import Filter from '../components/Filter';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, filterTodo } from '../store/actions/todos';
import Todos from './Todos';
// import { TouchableOpacity } from 'react-native-gesture-handler';

interface ITodo {
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
}
const modalItems = {};
export default function AllTodos() {
  const [state, setState] = useState({});
  const [selectedValue, setSelectedValue] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  const { todos, sortedTodos } = useSelector((state) => state?.todos);


  const handleFilter = (query: string) => {
    dispatch(filterTodo(query))
    setModalVisible(!modalVisible)
  };

  return (
    <View style={{ flex: 1 }}>
      <Filter
        handleFilter={handleFilter}
        modalVisible={modalVisible}
        setModalVisible={() => setModalVisible(!modalVisible)}
      />
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          {sortedTodos.map((todo: ITodo, index: number) => (
            <React.Fragment key={index}>
              <TodoItem todo={todo} />
            </React.Fragment>
          ))}
        </ScrollView>
      </View>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  filter: {
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
    width: '90%',
    alignSelf: 'center',
    // backgroundColor:'red'
  },
  filterItem: {
    padding: 4,
    height: 70,
    justifyContent: 'center',
    marginTop: 5,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
  // modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalItems: {
    height: 40,
    width: '100%',
    borderTopColor: 'grey',
    borderTopWidth: 0.26,
    paddingVertical: 5,
  },
});
