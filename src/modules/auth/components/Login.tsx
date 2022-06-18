import React from 'react';
import {View} from 'react-native';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {styles} from '../../styles/login';

export default function Login() {
  return (
    <View style={{...styles.container}}>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => console.log('jonas')}
      />
    </View>
  );
}
