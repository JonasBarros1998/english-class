import React from 'react';
import {Pressable} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import IconHome from '../Svgs/Home';
import IconList from '../Svgs/IconList';
import IconUser from '../Svgs/IconUser';
import CreateListsScreen from '@screen/CreateListsScreen';
import IconPlus from '../Svgs/IconPlus';
import UserProfileScreen from '@screen/UserProfileScreen';

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

            if (route.name === 'nova lista') {
              return <IconPlus />;
            }

            if (route.name === 'listas') {
              return <IconList />;
            }

            if (route.name === 'perfil') {
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
          name="nova lista"
          options={{
            headerShown: false,
          }}>
          {props => (
            <>
              <CreateListsScreen {...props} />
            </>
          )}
        </Tab.Screen>

        <Tab.Screen
          name="listas"
          options={{
            headerShown: false,
          }}>
          {props => <screens.PublicListScreen {...props} />}
        </Tab.Screen>

        <Tab.Screen
          name="perfil"
          options={{
            headerShown: false,
          }}>
          {props => (
            <UserProfileScreen
              navigation={props.navigation}
              route={props.route}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainMenu;
