import React from 'react';
import {View} from 'react-native';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {styles} from '../styles/login';
import {userLogin} from '../useCases/auth';

export default function Login(props: any) {
  return (
    <View style={{...styles.container}}>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => {
          userLogin(props.navigation);
        }}
      />
    </View>
  );
}
