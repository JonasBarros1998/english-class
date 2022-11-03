import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '@auth/components/Login';
import Menu from '@components/Menu/Menu';
import Details from '@modules/lists/components/Details';

const Stack = createNativeStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="main"
          component={Menu}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name="details"
          component={Details}
          options={{
            headerTitle: 'Detalhes'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
