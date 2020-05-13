import React, {useState, useContext} from 'react';
import {StyleSheet, View} from 'react-native';

import {Navbar} from './components/Navbar/Navbar';
import {MainScreen} from './screens/MainScreen/MainScreen';
import {TodoScreen} from './screens/TodoScreen/TodoScreen';
import {Theme} from './const';
import {ScreenContext} from './context/screen/screenContext';

export const MainLayout = () => {
  const {todoId} = useContext(ScreenContext);

  return (
    <View style={styles.wrapper}>
      <Navbar title={`Todo App`} />
      <View style={styles.container}>{todoId ? <TodoScreen/> : <MainScreen/>}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: Theme.WHITE_COLOR,
    paddingHorizontal: Theme.PADDING_HORIZONTAL,
    paddingVertical: Theme.PADDING_VERTICAL,
  },
});
