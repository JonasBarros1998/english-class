import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
// import {WEB_CLIENT_ID} from '@env/env.json';
/*
import {
  GoogleSignin,
  // GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';*/

import {
  GoogleSigninButton,
  configureGoogleSignIn,
  login,
} from '@auth/googleSignin/index';

import ModalComponent from '@components/Modal/ModalComponent';

function Login() {
  // const [userInfo, setUserInfo] = useState(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorLogin, setErrorLogin] = useState(null);

  useEffect(() => {
    configureGoogleSignIn();
    // configureGoogleSign();
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
      .then(function (sucess) {
        console.log(sucess);
        setErrorLogin(null);
      })
      .catch(function (error) {
        setErrorLogin(error.message);
        // console.log('message >>> ', error.message);
      });
    /*
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo: any = await GoogleSignin.signIn();
      setUserInfo(userInfo);
      console.log(userInfo);
      setError(null);
      setIsLoggedIn(true);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // when user cancels sign in process,
        Alert.alert('Process Cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // when in progress already
        Alert.alert('Process in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // when play services not available
        console.log(error.code);
        Alert.alert('Play services are not available');
      } else {
        // some other error
        Alert.alert('Something else went wrong... ', error.toString());
        setError(error);
      }
    }*/
  }

  function openModal() {
    if (errorLogin !== null) {
      return (
        <ModalComponent
          content={'Um erro ocorreu, tente novamente mais tarde'}
          size={'xs'}
          visible={true}
        />
      );
    }

    return <ModalComponent visible={false} />;
  }

  return (
    <View style={styles.container}>
      <GoogleSigninButton
        style={styles.signInButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => googleSignIn()}
      />
      {openModal()}
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
