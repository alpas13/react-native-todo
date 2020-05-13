import React, {useState} from 'react';
import * as Font from 'expo-font';
import {StyleSheet, SafeAreaView} from 'react-native';
import {AppLoading} from 'expo';
import {ScreenState} from './src/context/screen/ScreenState';
import {TodoState} from './src/context/todo/TodoState';
import {MainLayout} from './src/MainLayout';

async function LoadApplication() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
}

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={LoadApplication}
        onError={(err) => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScreenState>
        <TodoState>
          <MainLayout />
        </TodoState>
      </ScreenState>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
