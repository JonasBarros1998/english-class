import React from 'react';
import PrivateListScreen from '@screen/PrivateListScreen';
import MainPage from '@screen/index';
import ListDetailsScreen from '@screen/ListDetailsScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Routes() {
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
        {props => <PrivateListScreen {...props} />}
      </Stack.Screen>

      <Stack.Screen
        name="listDetails"
        options={{
          headerShown: false,
        }}>
        {props => <ListDetailsScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default Routes;
