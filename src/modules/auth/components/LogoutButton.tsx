import React from 'react';
import { signupEventAnalytics } from '@services/analytics/logs/logEvent';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import {styles} from '../styles/logout';
import {
  clearUserDatas, 
  removeUserDataInLocalStorage, 
  removeFlashCardInLocalStorage
} from '../useCases/logout';

export function LogoutButton() {
  function logout() {
    removeUserDataInLocalStorage();
    removeFlashCardInLocalStorage()
    clearUserDatas();
  };

  return (
    <>
      <View>
        <Button 
          mode='contained' 
          onPress={() => {
            signupEventAnalytics();
            logout();
          }} 
          style={{
            ...styles().button
          }}>
          Sair
        </Button>
      </View>
    </>
  )
}