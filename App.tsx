import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';

import {NativeBaseProvider} from 'native-base';

import PublicListScreen from './src/screen/publicListScreen';
import MainMenu from '@components/MainMenu';
import Routes from './src/routes';
import LoginScreen from '@screen/LoginScreen';

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

export const App = () => {
  return (
    <NativeBaseProvider initialWindowMetrics={inset}>
      <SafeAreaView />
      <StatusBar />
      <LoginScreen />
      {/*
      <MainMenu PublicListScreen={PublicListScreen} Routes={Routes} />
      */}
      <SafeAreaView />
    </NativeBaseProvider>
  );
};
export default App;
