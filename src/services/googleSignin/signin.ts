import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

import {WEB_CLIENT_ID} from '@env';

function configureGoogleSignIn() {
  GoogleSignin.configure({
    webClientId: WEB_CLIENT_ID,
  });
}

async function login(/*webClientId?: string*/) {
  configureGoogleSignIn();
  await GoogleSignin.hasPlayServices();
  return await GoogleSignin.signIn();
}

async function logout() {
  configureGoogleSignIn();
  return GoogleSignin.signOut();
}

async function currentUser() {
  return GoogleSignin.getCurrentUser();
}

export {configureGoogleSignIn, login, logout, GoogleSigninButton, currentUser};
