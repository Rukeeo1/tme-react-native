import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface Props {
  handleOnPress: () => void;
  title: string;
  buttonStyle?: Object;
}

export default function Button({ handleOnPress, title, buttonStyle }: Props) {
  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      <TouchableOpacity
        style={[styles.loginContainer, buttonStyle]}
        onPress={handleOnPress}
      >
        <Text
          style={{
            color: 'white',
            justifyContent: 'center',
            fontWeight: 'bold',
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    marginTop: 10,
    backgroundColor: 'blue',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
  },
});
