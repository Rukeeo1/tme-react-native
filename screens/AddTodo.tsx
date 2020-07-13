import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import ImageSelectorComponent from '../components/ImagePicker';
import { CheckBox } from 'react-native-elements'; // 0.16.0

//components
import Input from '../components/Input';
import Rating from '../components/Rating';
import Button from '../components/Button';

//redux
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../store/actions/todos';

// navigation
import { useNavigation, useRoute } from '@react-navigation/native';

export default function AddTodo() {
  const [ratingValue, saveRatingValue] = useState(1);
  const [date, setDate] = useState(new Date(1598051730000));
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [checkBoxState, setCheckBoxState] = useState(false);
  const [imageUri, setImageUri] = useState('')
  const [todo, setTodo] = useState({
    title: '',
    description: '',
  });

  const navigation = useNavigation();
  const route = useRoute();
  const { params, name } = route;

  useEffect(() => {
    if (name === 'UpdateTodo') {
      setTodo({
        title: params?.title,
        description: params?.description,
      });
      setCheckBoxState(params?.isRecurring);
      saveRatingValue(params?.priority);
      setDate(new Date(params?.dueDate));
    }
  }, []);

  const handleDate = (date) => {};

  const handleChange = (e: string, inputName: string) => {
    setTodo({
      ...todo,
      [inputName]: e,
    });
  };

  const dispatch = useDispatch();
  const submitTodo = () => {
    const todoItem = {
      title: todo.title,
      description: todo.description,
      priority: ratingValue,
      isRecurring: checkBoxState,
      dueDate: date,
      isCompleted: false,
      imageUri: imageUri,
      id: params?.id
    };
    if (name === 'UpdateTodo') {
      dispatch(updateTodo(todoItem,navigation))
    } else {
      dispatch(addTodo(todoItem, navigation));
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageSelectorComponent storeImage={setImageUri} />
        <View style={{ paddingVertical: 30 }}>
          <Text style={styles.title}>Title</Text>
          <Input
            placeholder="Give this todo a title"
            handleChange={(e) => handleChange(e, 'title')}
            value={todo.title}
          />
          <Text style={[{ marginTop: 30 }, styles.title]}>Description</Text>
          <Input
            placeholder="Describe the task to be completed"
            handleChange={(e) => handleChange(e, 'description')}
            multiline
            returnKeyType="done"
            value={todo.description}
          />
          <View style={styles.datePickerContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.title}>Due Date:</Text>
              <Text style={{ marginLeft: 10, color: 'grey' }}>
                {date.toLocaleDateString()}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.datePickerButton}
              onPress={() => setShowDatePicker(!showDatePicker)}
            >
              <Text style={{ fontWeight: '600' }}>
                {showDatePicker ? 'Done' : 'Pick Due Date'}
              </Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                onChange={handleDate}
                mode={'date'}
              />
            )}
          </View>
          <View style={{ marginTop: 10 }}>
            <View style={styles.priority}>
              <Text style={{ fontWeight: '500' }}>Set Todo Priority</Text>
            </View>
            <Rating
              saveRatingValue={saveRatingValue}
              ratingValue={ratingValue}
            />
          </View>
          <View style={styles.checkBoxContainer}>
            <CheckBox
              title="Recurring Tasks?"
              checked={checkBoxState}
              onPress={() => setCheckBoxState(!checkBoxState)}
            />
          </View>
          {name === 'UpdateTodo' ? (
            <Button
              title="Update Todo"
              handleOnPress={() => submitTodo()}
              buttonStyle={styles.btnStyle}
            />
          ) : (
            <Button
              title="Add Todo"
              handleOnPress={() => submitTodo()}
              buttonStyle={styles.btnStyle}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: '8%',
    paddingHorizontal: 30,
  },
  input: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    paddingTop: 10,
    paddingBottom: 10,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  checkBox: {
    alignSelf: 'center',
    height: 20,
    width: 20,
    marginRight: 10,
    borderColor: 'green',
  },
  datePickerContainer: {
    marginTop: 30,
  },
  datePickerButton: {
    height: 40,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  imagePickerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderColor: '#f8f8f8',
    borderWidth: 1,
    padding: 10,
  },
  btnStyle: {
    marginTop: '10%',
  },
  priority: {
    alignItems: 'center',
    marginTop: 10,
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
    paddingVertical: 5,
  },
  title: {
    fontWeight: '600',
  },
});
