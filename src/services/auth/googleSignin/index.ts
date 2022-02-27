import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {WEB_CLIENT_ID} from 'react-native-dotenv';

async function configureGoogleSignIn(webClientId?: string) {
  if (typeof webClientId !== 'undefined') {
    GoogleSignin.configure({
      webClientId: webClientId,
      offlineAccess: false,
    });
  }

  GoogleSignin.configure({
    webClientId: WEB_CLIENT_ID,
    offlineAccess: false,
  });
}

async function login() {
  await GoogleSignin.hasPlayServices();
  return await GoogleSignin.signIn();
}

async function logout() {
  await configureGoogleSignIn();
  return GoogleSignin.signOut();
}

async function currentUser() {
  return GoogleSignin.getCurrentUser();
}

export {configureGoogleSignIn, login, logout, GoogleSigninButton, currentUser};
