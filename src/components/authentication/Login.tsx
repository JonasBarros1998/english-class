import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {userSignin} from './useCase/userSignin';
import {styles} from './styles';
import {addUserDatasOnStorageAsync} from '@pubsub/reducers/userDatasLogged';

import {
  GoogleSigninButton,
  configureGoogleSignIn,
} from '@services/auth/googleSignin/index';

import ModalComponent from '@components/Modal/ModalComponent';

type param = {
  changeComponent: (status: boolean) => void;
};

function Login(props?: param) {
  const dispatch = useDispatch();

  useEffect(() => {
    configureGoogleSignIn();
  }, []);

  async function login() {
    userSignin(dispatch)
      .then(signin => {
        if (typeof signin !== 'undefined') {
          const [firstItem] = signin;
          dispatch(addUserDatasOnStorageAsync(JSON.stringify(firstItem)));
          if (typeof props !== 'undefined') {
            props.changeComponent(true);
          }
        }
      })
      .catch(() => {
        if (typeof props !== 'undefined') {
          props.changeComponent(false);
        }
      });
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
