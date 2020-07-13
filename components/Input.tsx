import React from 'react';
import { View, TextInput, StyleSheet, Keyboard } from 'react-native';

type Props = {
  placeholder: string;
  handleChange: (e: string) => void;
  multiline?: boolean;
  returnKeyType?: string;
  value?: string
};

export default function Input({
  placeholder,
  handleChange,
  multiline,
  returnKeyType,
  value
}: Props) {
  return (
    <View style={styles.input}>
      <TextInput
        placeholder={placeholder}
        onChangeText={handleChange}
        multiline={multiline}
        onBlur={() => Keyboard.dismiss()}
        value={value}
        style={{color:'grey'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
