import React from 'react';
import {View} from 'react-native';
import {GoogleSigninButton} from '@services/auth/googleSignin/index';
import {managerAccess} from '../useCases/userSignin';
import ModalComponent from '@components/Modal/ModalComponent';
import {styles} from './styles/styles';

function Login() {
  const login = async () => await managerAccess();

  return (
    <View style={styles.container}>
      <ModalComponent />
      <GoogleSigninButton
        style={styles.signInButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => login()}
      />
    </View>
  );
}

export default Login;
