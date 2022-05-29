import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NativeBaseProvider, Center, Text} from 'native-base';
import {useDispatch, Provider, useSelector} from 'react-redux';
import MainMenu from '@components/MainMenu';
import {Login} from '@components/authentication';
import {getUserDatasOnStorageAsync} from '@pubsub/reducers/userDatasLogged';
import {storageGetItem} from '@storage/getItem';
import {currentUser} from '@services/auth/googleSignin';
import {USER_STORAGE} from '@global/constants';
import {
  getPrivateListsAsync,
  getPublicListOfUserLoggedAsync,
} from '@pubsub/lists';
import {userInfo} from '@global/types/userInfo';
import PublicListScreen from './src/screen/publicListScreen';
import Routes from './src/routes';
import store from './src/pubsub/store';
import {dispatchPrivateList} from '@components/Lists/privateLists/useCase/loadPrivateList';

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

function SelectMainPage() {
  const [userLogged, setUserLogged] = useState(false);
  const [loadComponent, setLoadComponent] = useState(true);

  const dispatch = useDispatch();

  dispatch(getUserDatasOnStorageAsync());

  useSelector((state: any) => state.theUserHaveAccess);

  async function loadStatePrivateList() {
    await dispatchPrivateList();
  }

  const load = useCallback(async () => {
    const userData = (await storageGetItem(USER_STORAGE)) as userInfo;
    dispatch(getPrivateListsAsync(userData));
    dispatch(getPublicListOfUserLoggedAsync(userData.lists.publicLists));
  }, [dispatch]);

  useEffect(() => {
    load();
  });

  currentUser().then(function (item) {
    if (item !== null) {
      setUserLogged(true);
      setLoadComponent(false);
      loadStatePrivateList();
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
    return <Login />;
  } else {
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
