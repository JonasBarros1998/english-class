import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';

import {NativeBaseProvider} from 'native-base';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainPage from './src/screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import PublicListScreen from './src/screen/publicListScreen';
import UserListScreen from './src/screen/userListcreen';

import IconHome from '@components/Svgs/Home';
import IconList from '@components/Svgs/IconList';
import IconUser from '@components/Svgs/IconUser';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

function MainPageScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="homePage"
        options={{
          title: 'Página Inicial',
          headerStyle: {
            backgroundColor: '#312E81',
          },
          headerTintColor: '#fff',
        }}>
        {props => {
          return <MainPage {...props} />;
        }}
      </Stack.Screen>

      <Stack.Screen
        name="userList"
        options={{
          headerShown: false,
        }}>
        {props => <UserListScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

function MenuPrincipal() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: () => {
            if (route.name === 'home') {
              return <IconHome />;
            }

            if (route.name === 'publicList') {
              return <IconList />;
            }
            return <IconUser />;
          },
        })}>
        <Tab.Screen
          name="home"
          options={{
            headerShown: false,
          }}>
          {() => <MainPageScreen />}
        </Tab.Screen>

        <Tab.Screen
          name="publicList"
          options={{
            headerShown: false,
          }}>
          {props => <PublicListScreen {...props} />}
        </Tab.Screen>

        <Tab.Screen
          name="userPerfil"
          options={{
            headerShown: false,
          }}>
          {() => <IconUser />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export const App = () => {
  return (
    <NativeBaseProvider initialWindowMetrics={inset}>
      <SafeAreaView />
      <StatusBar />
      <MenuPrincipal />
      <SafeAreaView />
    </NativeBaseProvider>
  );
};

export default App;
