import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default ({
  _id, errorMsg, placeholder, onValueChange, value, onFocus, keyboardType
}) => (
  <View style={errorMsg ? styles.error : styles.textInput}>

    <TextInput
      editable={!_id}
      selectTextOnFocus={!!_id}
      underlineColorAndroid="transparent"
      autoCapitalize="none"
      autoCorrect={false}
      style={_id ? styles.disableInput : styles.input}
      placeholder={placeholder}
      placeholderTextColor="#ACB6B1"
      returnKeyType="go"
      keyboardType={keyboardType}
      onChangeText={onValueChange}
      defaultValue={`${value}`}
      value={`${value}`}
      onFocus={onFocus}
    />

  </View>
);

const styles = StyleSheet.create({
  textInput: {
    marginLeft: 20,
    marginRight: 20,
    marginVertical: 10,
    borderColor: '#ACB6B1',
    borderWidth: 0.5
  },
  error: {
    marginLeft: 20,
    marginRight: 20,
    marginVertical: 10,
    borderColor: 'red',
    borderWidth: 0.5

  },
  input: {
    padding: 0,
    marginLeft: 10,
    height: 50,
    fontSize: 20,
    color: '#434C6B',

  },
  disableInput: {
    padding: 0,
    marginLeft: 10,
    height: 50,
    fontSize: 20,
    color: '#ACB6B1',

  }
});
