import React, {useState, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {Theme} from '../../const';
import {AppCard} from '../../ui/AppCard/AppCard';
import {EditTodo} from '../../components/EditTodo/EditTodo';
import {AppTextBold} from '../../ui/AppTextBold/AppTextBold';
import {AppButton} from '../../ui/AppButton/AppButton';
import { TodoContext } from '../../context/todo/todoContext';
import { ScreenContext } from '../../context/screen/screenContext';

export const TodoScreen = () => {
  const [modal, setModal] = useState(false);
  const {todos, removeTodo, updateTodo} = useContext(TodoContext);
  const {todoId, changeScreen} = useContext(ScreenContext);

  const changeTitle = async (title) => {
    await updateTodo(todo.id, title);
    console.log('Change Title');
    setModal(false);
  };

  const todo = todos.find((item) => item.id === todoId);

  return (
    <View style={styles.todoContainer}>
      <EditTodo
        visible={modal}
        onVisible={setModal}
        value={todo.title}
        onSave={changeTitle}
      />
      <AppCard style={styles.card}>
        <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
        <AppButton color={Theme.MAIN_COLOR} onPress={() => setModal(true)}>
        <FontAwesome name="edit" size={24} color="white" />
        </AppButton>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton color={Theme.GREY_COLOR} onPress={() => changeScreen(null)}>
            Back
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton
            color={Theme.DANGER_COLOR}
            onPress={() => {
              removeTodo(todo.id);
            }}
          >
            Remove
          </AppButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {},
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '40%',
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
  title: {
    fontSize: 20,
  },
});
