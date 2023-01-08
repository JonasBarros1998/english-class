import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '@auth/components/Login';
import Menu from '@components/Menu/Menu';
import Details from '@modules/lists/components/Details';
import { useSelector } from 'react-redux';
import { User } from '@global/interfaces/User';
import Update from '@modules/lists/components/Update';
import { HelpForm } from '@modules/Form/HelpForm';

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

          <Stack.Screen 
            name="update"
            component={Update}
            options={{
              headerShown: false
          }}/>

          <Stack.Screen 
            name="helpform"
            component={HelpForm}
            options={{
              headerShown: true,
              headerTitle: 'Avalie este app'
            }} />
        </>
        )
      }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
