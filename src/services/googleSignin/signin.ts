import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes
} from '@react-native-google-signin/google-signin';

import {WEB_CLIENT_ID} from '@env';

function configureGoogleSignIn() {
  GoogleSignin.configure({
    webClientId: WEB_CLIENT_ID,
    scopes: ['email']
  });
}

async function login() {
  configureGoogleSignIn();
  return GoogleSignin.signIn()
    .then(function(user) {
      return user;
    })
    .catch(function(error) {
      if(error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        throw statusCodes.PLAY_SERVICES_NOT_AVAILABLE;
      }
    });
}

async function logout() {
  configureGoogleSignIn();
  return GoogleSignin.signOut();
}

async function currentUser() {
  return GoogleSignin.getCurrentUser();
}

export {configureGoogleSignIn, login, logout, GoogleSigninButton, currentUser};
