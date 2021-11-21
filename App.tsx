import React, {useCallback, useEffect, useState} from 'react';

import {SafeAreaView, StatusBar} from 'react-native';

import {NativeBaseProvider} from 'native-base';

import {Provider, useSelector} from 'react-redux';

import PublicListScreen from './src/screen/publicListScreen';
import MainMenu from '@components/MainMenu';
import Routes from './src/routes';
import store from './src/pubsub/store';
import Login from '@components/authentication/Login';
import {currentUser, logout} from '@auth/googleSignin/index';

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

type selector = {
  userInfo: {
    name: string;
    userId: number;
  };
};

function SelectMainPage() {
  const [userLogged, setUserLogged] = useState(false);

  useSelector((state: selector) => state.userInfo);

  const setUserLoggedCallback = useCallback(function () {
    // logout().then(() => console.log('deslogado'));

    currentUser().then(user => {
      if (user === null) {
        setUserLogged(false);
        return;
      }
      setUserLogged(true);
      return;
    });
  }, []);

  useEffect(() => {
    setUserLoggedCallback();
  });

  return (
    <>
      {userLogged === true ? (
        <MainMenu PublicListScreen={PublicListScreen} Routes={Routes} />
      ) : (
        <Login />
      )}
    </>
  );
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
