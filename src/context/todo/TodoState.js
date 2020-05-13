import React, {useReducer, useContext} from 'react';
import {Alert} from 'react-native';
import {TodoContext} from './todoContext';
import {todoReducer} from './todoReducer';
import {ActionType} from '../../const';
import {ScreenContext} from '../screen/screenContext';
import {Http} from '../../http';

export const TodoState = ({children}) => {
  const initialState = {
    todos: [],
    loading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const {changeScreen} = useContext(ScreenContext);

  const addTodo = async (title) => {
    const data = await Http.post('https://rn-todo-app-6096c.firebaseio.com/todos.json', {title});
    dispatch({type: ActionType.ADD_TODO, title, id: data.name});
  };

  const removeTodo = (id) => {
    const todo = state.todos.find((item) => item.id === id);
    Alert.alert(
      'Remove ToDo Element',
      `Are you sure that you want to remove the ${todo.title}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: async () => {
            await Http.delete(`https://rn-todo-app-6096c.firebaseio.com/todos/${id}.json`);
            changeScreen(null);
            dispatch({type: ActionType.REMOVE_TODO, id});
          },
        },
      ],
      {cancelable: false}
    );
  };
  const updateTodo = async (id, title) => {
    clearError();
    try {
      const response = await Http.patch(`https://rn-todo-app-6096c.firebaseio.com/todos/${id}.json`, {title})
      dispatch({type: ActionType.UPDATE_TODO, id, title})
    } catch (e) {
      showError('Anything is wrong!');
      console.log(e);
    }
  };

  const showLoader = () => dispatch({type: ActionType.SHOW_LOADER});
  const hideLoader = () => dispatch({type: ActionType.HIDE_LOADER});
  const showError = (error) => dispatch({type: ActionType.SHOW_ERROR, error});
  const clearError = () => dispatch({type: ActionType.CLEAR_ERROR});

  const fetchTodo = async () => {
    showLoader()
    clearError()
    try {
      const response = await fetch(
        'https://rn-todo-app-6096c.firebaseio.com/todos.json',
        {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        }
      );
      const data = await response.json();
      const todos = Object.keys(data).map((key) => ({...data[key], id: key}))
      dispatch({type: ActionType.FETCH_TODO, todos});
    } catch (e) {
      showError('Anything is wrong!');
      console.log(e);
    } finally {
      hideLoader();
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        updateTodo,
        fetchTodo,
        loading: state.loading,
        error: state.error,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
