import axios from 'axios';

import handleLoading from './handleLoading';

export const signUp = (data) => async (dispatch) => {
  try {
    await axios.post(
      `https://react-native-test-tme.firebaseio.com/users.json`,
      data
    );

    alert('created sucessfully');
  } catch (error) {}
};

const userExists = (user, values) => {
  for (let i = 0; i < values.length; i++) {
    const emailValid =
      user.email.toLowerCase() === values[i].email.toLowerCase();
    const passwordValid =
      user.password.toLowerCase() === values[i].password.toLowerCase();
    if (emailValid && passwordValid) {
      return {
        isValid: true,
        ...values[i],
      };
    }
  }
  return false;
};

export const login = (user, navigation) => async (dispatch) => {
  dispatch(handleLoading());
  try {
    const response = await axios.get(
      `https://react-native-test-tme.firebaseio.com/users.json`
    );
    const values = Object.values(response.data);
    const validUser = userExists(user, values);

    if (!validUser) {
      alert('User does not exists, try signing up');
    } else {
      navigation.navigate('Todos', validUser);
    }
  } catch (error) {
    alert(error.response.message || error.message);
  }
  dispatch(handleLoading());
};
