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
import FlashCardsEmptyList from '@modules/flash-cards/FlashCardsEmptyList';
import Lists from '@modules/lists/components/Lists'
import FlashCardsListEmpty from '@modules/flash-cards/FlashCardsEmptyList';
import FlashCards from '@modules/flash-cards/FlashCards';
import FlashCardsList from '@modules/flash-cards/FlashCardsList';
//import { ResultFlashCards } from '@modules/flash-cards/ResultFalshCards';


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

          <Stack.Screen 
            name="flashCardsEmptyList"
            component={FlashCardsEmptyList}
            options={{
              headerShown: true,
              headerTitle: 'Flash cards'
            }} />

          <Stack.Screen 
            name="flashcards"
            component={FlashCards}
            options={{
              headerShown: true,
              headerTitle: 'Flash cards'
            }} />

          <Stack.Screen 
            name="lists"
            component={Lists}
            options={{
              headerShown: true,
              headerTitle: 'Flash cards'
            }}
          />

          <Stack.Screen 
            name="flashCardsList"
            component={FlashCardsList}
            options={{
              headerShown: true,
              headerTitle: 'Flash cards'
            }}
          />

          {/** 
          <Stack.Screen 
            name="resultFlashCard"
            component={ResultFlashCards}
            options={{
              headerShown: true,
              headerTitle: 'Resultado'
            }}
          />
          */}
          
        </>
        )
      }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
