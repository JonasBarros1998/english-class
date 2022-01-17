import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NativeBaseProvider, Center, Text} from 'native-base';
import {useDispatch, Provider, useSelector} from 'react-redux';
import MainMenu from '@components/MainMenu';
import {Login} from '@components/authentication';
import {getUserDatasOnStorageAsync} from '@pubsub/reducers/userDatasLogged';
import {currentUser} from '@auth/googleSignin';
import PublicListScreen from './src/screen/publicListScreen';
import Routes from './src/routes';
import store from './src/pubsub/store';

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

function SelectMainPage() {
  const [userLogged, setUserLogged] = useState(false);
  const [loadComponent, setLoadComponent] = useState(true);
  const dispatch = useDispatch();
  dispatch(getUserDatasOnStorageAsync());
  useSelector((state: any) => state.loggedUser);

  async function ToChangeComponent(status: boolean) {
    if (status === true) {
      setUserLogged(true);
      setLoadComponent(false);
      return;
    }
    setUserLogged(false);
    setLoadComponent(true);
  }

  currentUser().then(function (item) {
    if (item !== null) {
      setUserLogged(true);
      setLoadComponent(false);
      return;
    }
    setLoadComponent(false);
    setUserLogged(false);
  });

  if (loadComponent === true) {
    return (
      <Center flex={1}>
        <Text>Aguarde....</Text>
      </Center>
    );
  }

  if (userLogged === false) {
    return <Login changeComponent={ToChangeComponent} />;
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
