import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {userSignin} from './useCase/userSignin';
import {styles} from './styles';

import {
  GoogleSigninButton,
  configureGoogleSignIn,
} from '@auth/googleSignin/index';

import ModalComponent from '@components/Modal/ModalComponent';

function Login() {
  const dispatch = useDispatch();

  useEffect(() => {
    configureGoogleSignIn();
  }, []);

  async function login() {
    await userSignin(dispatch);
  }

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
