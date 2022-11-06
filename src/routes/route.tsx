import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '@auth/components/Login';
import Menu from '@components/Menu/Menu';
import Details from '@modules/lists/components/Details';
import { useSelector } from 'react-redux';
import { User } from '@global/interfaces/User';

const Stack = createNativeStackNavigator();

export default function Routes() {
  
  const userSignin = useSelector<{user: User[]}, User[]>((state) => state.user);

  return (
    <NavigationContainer>
      <Stack.Navigator>
      {
        userSignin.length === 0 ? (
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              headerShown: false,
            }}
        />
        ): (
        <>
          <Stack.Screen 
            name="main"
            component={Menu}
            options={{
              headerShown: false,
          }}/>
          
          <Stack.Screen 
            name="details"
            component={Details}
            options={{
              headerTitle: 'Detalhes'
          }}/>
        </>
        )
      }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
