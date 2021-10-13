import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import IconHome from '../Svgs/Home';
import IconList from '../Svgs/IconList';
import IconUser from '../Svgs/IconUser';

const Tab = createBottomTabNavigator();

type param = {
  Routes: Function;
  PublicListScreen: Function;
};

function MainMenu(screens: param) {
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
          {() => <screens.Routes />}
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
          {() => <IconUser />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MainMenu;
