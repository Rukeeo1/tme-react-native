import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Button from '../components/Button';

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

//
import {useDispatch} from 'react-redux'
import { signUp  } from '../store/actions/user'

// navigation props type
type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

// route props type
type SignUpScreenRouteProp = RouteProp<RootStackParamList, 'SignUp'>;

type Props = {
  navigation: SignUpScreenNavigationProp;
  route: SignUpScreenRouteProp;
};

export default function SignUp(props: Props) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch()

  const handleChange = (e: string, inputName: string) => {
    setUser({
      ...user,
      [inputName]: e,
    });
  };

  const submitUser = () => {
    
    dispatch(signUp(user))
  }

 
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={{ width: '80%' }}>
        <AntDesign
          name="leftcircleo"
          size={24}
          color="grey"
          onPress={() => props.navigation.navigate('Login')}
        />
        <View style={styles.header}>
          <Text>Create an account</Text>
        </View>

        <View style={styles.input}>
          <TextInput
            placeholder="Full Name"
            onChangeText={(e) => handleChange(e, 'name')}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="Email"
            onChangeText={(e) => handleChange(e, 'email')}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="Password"
            onChangeText={(e) => handleChange(e, 'password')}
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Button
          title="SignUp"
          handleOnPress={submitUser}
          buttonStyle={styles.buttonStyle}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '20%',
    alignItems: 'center',
    // justifyContent:'center'
  },
  header: {
    marginTop: '50%',
  },
  input: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    width: '80%',
    alignItems: 'center',
  },
});
