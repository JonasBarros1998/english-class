import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {onOff} from '@pubsub/onOffSlice';
import {PLAY_SERVICES_NOT_AVAILABLE, SIGN_IN_CANCELLED} from './constants';

import {
  GoogleSigninButton,
  configureGoogleSignIn,
  login,
} from '@auth/googleSignin/index';

import ModalComponent from '@components/Modal/ModalComponent';

function Login() {
  const dispatch = useDispatch();

  useEffect(() => {
    configureGoogleSignIn();
  }, []);

  /*
  function configureGoogleSign() {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
      offlineAccess: false,
    });
  }*/

  async function googleSignIn() {
    login()
      .then(function (loginSucess) {
        console.log('>>> ', loginSucess);
      })
      .catch(function (error: any) {
        if (error.message === PLAY_SERVICES_NOT_AVAILABLE) {
          dispatch(
            onOff({
              status: true,
              message: 'play service indisponível',
            }),
          );
          return;
        }

        if (error.message === SIGN_IN_CANCELLED) {
          dispatch(
            onOff({
              status: true,
              message: 'processo cancelado',
            }),
          );
        }

        dispatch(
          onOff({
            status: true,
            message: 'Um erro ocorreu, tente novamente mais tarde',
          }),
        );
      });
  }

  return (
    <View style={styles.container}>
      <ModalComponent />
      <GoogleSigninButton
        style={styles.signInButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => googleSignIn()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButton: {
    width: 200,
    height: 50,
  },
  status: {
    marginVertical: 20,
  },
  loggedinMessage: {
    fontSize: 20,
    color: 'tomato',
  },
});

export default Login;
