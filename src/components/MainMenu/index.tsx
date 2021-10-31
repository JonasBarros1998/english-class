import React from 'react';
import {Pressable} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import IconHome from '../Svgs/Home';
import IconList from '../Svgs/IconList';
import IconUser from '../Svgs/IconUser';
import {CreateLists} from '@components/Forms';
import IconPlus from '../Svgs/IconPlus';

const Tab = createBottomTabNavigator();

type param = {
  Routes: Function;
  PublicListScreen: Function;
};

function MainMenu(screens: param) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route, navigation}) => ({
          tabBarIcon: () => {
            if (route.name === 'home') {
              return (
                <Pressable onPress={() => navigation.navigate('homePage')}>
                  <IconHome />
                </Pressable>
              );
            }

            if (route.name === 'createList') {
              return <IconPlus />;
            }

            if (route.name === 'publicList') {
              return <IconList />;
            }

            if (route.name === 'userPerfil') {
              return <IconUser />;
            }
          },
        })}>
        <Tab.Screen
          name="home"
          options={{
            headerShown: false,
          }}>
          {() => <screens.Routes />}
        </Tab.Screen>

        <Tab.Screen
          name="createList"
          options={{
            headerShown: false,
          }}>
          {() => <CreateLists />}
        </Tab.Screen>

        <Tab.Screen
          name="publicList"
          options={{
            headerShown: false,
          }}>
          {props => <screens.PublicListScreen {...props} />}
        </Tab.Screen>

        <Tab.Screen
          name="userPerfil"
          options={{
            headerShown: false,
          }}>
          {() => <CreateLists />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MainMenu;
