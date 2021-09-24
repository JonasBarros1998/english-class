import React from 'react';

import {SafeAreaView, Text, StatusBar} from 'react-native'

import {NativeBaseProvider} from 'native-base';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainPage from './src/screen';

import PublicListScreen from './src/screen/publicListScreen';
import UserListScreen from './src/screen/userListcreen';
import MainMenu from './src/components/MainMenu';
import database from '@react-native-firebase/database';
import {firebase} from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

const Rotas = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          options={{
            title: 'Página Inicial',
            headerStyle: {
              backgroundColor: '#312E81',
            },
            headerTintColor: '#fff',
          }}>
          {props => <MainPage {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="publicList"
          options={{
            title: 'Listas Públicas',
            headerStyle: {
              backgroundColor: '#312E81',
            },
            headerTintColor: '#fff',
          }}>
          {props => <PublicListScreen {...props} />}
        </Stack.Screen>

        <Stack.Screen
          name="userList"
          options={{
            headerShown: false,
          }}>
          {props => <UserListScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const db = () => {
  database().ref('/users').once('value')
  .then(user => {
    console.log('then >>', user)
  })
  .catch(erro => {
    console.log(erro)
  })
}
db();

const App = () => {
  return (
    <NativeBaseProvider initialWindowMetrics={inset}>
      <SafeAreaView /> 
      <StatusBar />
        <Rotas />
        {/*<Text>JONAS</Text>*/}
      <SafeAreaView />
    </NativeBaseProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
