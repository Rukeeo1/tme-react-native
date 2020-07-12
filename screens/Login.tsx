import React, { useState, Key } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Button,
  TouchableOpacity,
} from 'react-native';
import { validateForm } from '../helpers/validations';

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

// navigation props type
type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

// route props type
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};

export default function Login(props: Props) {
  interface IUser {
    email: string;
    password: string;
  }
  const [userDetails, setUserDetails] = useState<IUser>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleInput = (e: String, inputType: Key) => {
    setUserDetails({
      ...userDetails,
      [inputType]: e,
    });
  };

  const handleLogin = () => {
    const form = validateForm(userDetails);
    if (form.isValid) {
      //submit form
      return;
    }
    setErrors(form);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Text style={styles.title}>Todo App</Text>
      <View style={styles.inputStyle}>
        <TextInput
          placeholder="Enter your Email"
          style={styles.textInput}
          placeholderTextColor={'#fff'}
          onChangeText={(e) => handleInput(e, 'email')}
        />
      </View>
      {errors.email ? <Text>Invalid Email Format</Text> : null}
      <View style={styles.inputStyle}>
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          placeholderTextColor={'#fff'}
          onChangeText={(e) => handleInput(e, 'password')}
        />
      </View>
      {errors.password ? <Text>{errors.password}</Text> : null}
      <View>
        <TouchableOpacity style={styles.loginContainer} onPress={handleLogin}>
          <Text
            style={{
              color: 'white',
              justifyContent: 'center',
              fontWeight: 'bold',
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text>New To Travel Meet? </Text>
        <TouchableOpacity
          style={{ height: 20 }}
          onPress={() => props.navigation.navigate('Todos')}
        >
          <View>
            <Text style={{ color: 'white' }}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191b28',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 30,
  },
  inputStyle: {
    width: '60%',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    marginTop: 20,
  },
  textInput: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 8,
    color: 'white',
  },
  loginContainer: {
    marginTop: 10,
    backgroundColor: 'blue',
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
  },
});
