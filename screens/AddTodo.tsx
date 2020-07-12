import React, { useState } from 'react';
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
import {useDispatch} from 'react-redux'
import {addTodo} from '../store/actions/todos'

export default function AddTodo() {
  const [ratingValue, saveRatingValue] = useState(2);
  const [date, setDate] = useState(new Date(1598051730000));
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [checkBoxState, setCheckBoxState] = useState(false);
  const [todo, setTodo] = useState({
    title: '',
    description: '',
  });

  const handleDate = (date) => {
    console.log(date.target);
  };

  const handleChange = (e: string, inputName: string) => {
    setTodo({
      ...todo,
      [inputName]: e,
    });
  }; 
  const dispatch = useDispatch()
  const submitTodo = () => {
    const todoItem = {
      title: todo.title,
      description: todo.description,
      priority: ratingValue,
      isRecurring: checkBoxState,
      dueDate: date,
      isCompleted: false
    };
    dispatch(addTodo(todoItem))
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageSelectorComponent storeImage={() => {}}/>
        <View style={{ paddingVertical: 30 }}>
          <Text>Title</Text>
          <Input
            placeholder="Give this todo a title"
            handleChange={(e) => handleChange(e, 'title')}
          />
          <Text style={{ marginTop: 30 }}>Description</Text>
          <Input
            placeholder="Describe the task to be completed"
            handleChange={(e) => handleChange(e, 'description')}
            multiline
            returnKeyType="done"
          />
          <View style={styles.datePickerContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Text>Due Date:</Text>
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
            <View
              style={{
                alignItems: 'center',
                marginTop: 10,
                borderBottomWidth: 0.3,
                borderBottomColor: 'grey',
                paddingVertical: 5,
              }}
            >
              <Text style={{ fontWeight: '500' }}>Set Todo Priority</Text>
            </View>
            <Rating saveRatingValue={saveRatingValue} />
          </View>
          <View style={styles.checkBoxContainer}>
            <CheckBox
              title="Recurring Tasks?"
              checked={checkBoxState}
              onPress={() => setCheckBoxState(!checkBoxState)}
            />
          </View>
          <Button
            title="Add Todo"
            handleOnPress={() => submitTodo()}
            buttonStyle={styles.btnStyle}
          />
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
});
