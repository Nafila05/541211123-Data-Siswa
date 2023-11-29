import React from 'react';
import { Text, StyleSheet, TextInput } from 'react-native';

const CustomInput = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 280,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#808080',
    borderColor: 'white',
    borderRadius: 5,
    backgroundColor: '#DCDCDC',
  },
});

export default CustomInput;