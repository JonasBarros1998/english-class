import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {WEB_CLIENT_ID} from '@env/env.json';

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
  GoogleSignin.signOut();
}

export {configureGoogleSignIn, login, logout, GoogleSigninButton};
