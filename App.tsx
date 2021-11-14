import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';

import {NativeBaseProvider} from 'native-base';

import PublicListScreen from './src/screen/publicListScreen';
import MainMenu from '@components/MainMenu';
import Routes from './src/routes';
import store from './src/pubsub/store';
import {Provider} from 'react-redux';

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

export const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider initialWindowMetrics={inset}>
        <SafeAreaView />
        <StatusBar />
        <MainMenu PublicListScreen={PublicListScreen} Routes={Routes} />
        <SafeAreaView />
      </NativeBaseProvider>
    </Provider>
  );
};
export default App;
