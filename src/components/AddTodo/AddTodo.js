import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Alert, Keyboard} from 'react-native';
import {EvilIcons} from '@expo/vector-icons';
import {Theme} from '../../const';

export const AddTodo = ({onSubmit}) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value.trim());
      setValue(``);
      Keyboard.dismiss();
    } else if (value && !value.trim()) {
      setValue(``);
      Alert.alert('The title of task, must not be empty');
    } else {
      Alert.alert('The title of task, must not be empty');
    }
  };
  return (
    <View style={styles.addTodoWrapper}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder={'Add some text to the task'}
      />
      <EvilIcons.Button
        name="plus"
        size={24}
        color="white"
        onPress={pressHandler}
      >
        Add Todo
      </EvilIcons.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  addTodoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  input: {
    width: '60%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomColor: Theme.MAIN_COLOR,
    borderBottomWidth: 2,
  },
});
