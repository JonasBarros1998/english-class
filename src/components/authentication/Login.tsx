import React, {useEffect} from 'react';
import {
  configureGoogleSignIn,
  onGoogleButtonPress,
} from '../../auth/googleSignin';
import {Button} from 'native-base';

function Login() {
  useEffect(() => {
    configureGoogleSignIn();
  });
  return (
    <Button
      onPress={() => {
        onGoogleButtonPress()
          .then(() => console.log('Signed in with Google!'))
          .catch((error: any) => {
            console.log('>> error', error);
          });
      }}>
      Google Sign-In
    </Button>
  );
}

export default Login;
