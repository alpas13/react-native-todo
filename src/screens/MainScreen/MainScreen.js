import React, {useState, useEffect, useContext, useCallback} from 'react';
import {StyleSheet, View, Image, FlatList, Dimensions, ActivityIndicator} from 'react-native';
import {AddTodo} from '../../components/AddTodo/AddTodo';
import {Todo} from '../../components/Todo/Todo';
import {Theme} from '../../const';
import {TodoContext} from '../../context/todo/todoContext';
import { ScreenContext } from '../../context/screen/screenContext';
import { AppLoader } from '../../ui/AppLoader/AppLoader';
import { AppTextBold } from '../../ui/AppTextBold/AppTextBold';
import {AppButton} from '../../ui/AppButton/AppButton';

export const MainScreen = (props) => {
  const {todos, addTodo, removeTodo, fetchTodo, loading, error} = useContext(TodoContext);
  const {changeScreen} = useContext(ScreenContext);
  
  const [dimensionsWitdh, setDimensionsWidth] = useState(
    Dimensions.get('window').width - Theme.PADDING_HORIZONTAL * 2
  );

  const loadTodos = useCallback(async () => await fetchTodo(), [fetchTodo])

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {
    const update = () => {
      const width =
        Dimensions.get('window').width - Theme.PADDING_HORIZONTAL * 2;
      setDimensionsWidth(width);
    };
    Dimensions.addEventListener('change', update);

    return () => {
      Dimensions.removeEventListener('change', update);
    };
  });

  if(loading) {
    return (
      <AppLoader/>
    )
  }

  if(error) {
    return (<View style={styles.center}>
      <AppTextBold style={styles.textError}>Etwas los nicht geht!</AppTextBold>
      <AppButton onPress={() => loadTodos()}>Reload</AppButton>
    </View>)
  }

  let content = (
    <View style={{width: dimensionsWitdh}}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={todos}
        renderItem={({item}) => (
          <Todo todo={item} onRemove={removeTodo} selectTodo={changeScreen} />
        )}
      />
    </View>
  );

  if (todos.length === 0) {
    content = (
      <View style={styles.imageWrapper}>
        <Image
          style={styles.imageStyle}
          source={require('../../../assets/no-items.png')}
        />
      </View>
    );
  }

  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 300,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textError: {
    fontSize: 20,
    color: Theme.DANGER_COLOR,
    marginBottom: 10
  },
  button: {
    
  }
});
