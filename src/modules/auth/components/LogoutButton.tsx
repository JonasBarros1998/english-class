import { remove } from '@services/storage/delete';
import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import {styles} from '../styles/logout';
import {clearUserDatas, removeUserDataInLocalStorage} from '../useCases/logout';

export function LogoutButton() {
  function logout() {
    removeUserDataInLocalStorage();
    clearUserDatas();
  };

  return (
    <>
      <View>
        <Button 
          mode='contained' 
          onPress={() => logout()} 
          style={{
            ...styles().button
          }}>
          Sair
        </Button>
      </View>
    </>
  )
}