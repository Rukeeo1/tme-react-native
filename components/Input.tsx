import React from 'react';
import { View, TextInput, StyleSheet, Keyboard } from 'react-native';

type Props = {
  placeholder: string;
  handleChange: (e: string) => void;
  multiline?: boolean;
  returnKeyType?: string;
};

export default function Input({
  placeholder,
  handleChange,
  multiline,
  returnKeyType,
}: Props) {
  return (
    <View style={styles.input}>
      <TextInput
        placeholder={placeholder}
        onChangeText={handleChange}
        multiline={multiline}
        onBlur={() => Keyboard.dismiss()}
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
