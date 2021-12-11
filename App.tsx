import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Center, NativeBaseProvider, Text} from 'native-base';

import {Provider, useSelector} from 'react-redux';

import PublicListScreen from './src/screen/publicListScreen';
import MainMenu from '@components/MainMenu';
import Routes from './src/routes';
import store from './src/pubsub/store';
import Login from '@components/authentication/Login';
import {currentUser} from '@auth/googleSignin/index';

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

type selector = {
  loggedUser: {
    status: boolean;
  };
};

function SelectMainPage(): JSX.Element {
  const [userLogged, setUserLogged] = useState(false);
  const [loadComponent, setLoadComponent] = useState(true);

  useSelector((state: selector) => state.loggedUser);

  currentUser().then(function (userInfo) {
    if (userInfo === null) {
      setUserLogged(false);
      setLoadComponent(false);
      return;
    }
    setUserLogged(true);
    setLoadComponent(false);
  });

  if (loadComponent === true) {
    return (
      <Center flex={1}>
        <Text>Aguarde....</Text>
      </Center>
    );
  }

  if (userLogged === false) {
    return <Login />;
  }
  if (userLogged === true) {
    return <MainMenu PublicListScreen={PublicListScreen} Routes={Routes} />;
  }
}

export const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider initialWindowMetrics={inset}>
        <SafeAreaView />
        <StatusBar />
        <SelectMainPage />
        <SafeAreaView />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
