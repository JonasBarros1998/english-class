import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {WEB_CLIENT_ID} from '@env/env.json';

async function configureGoogleSignIn() {
  GoogleSignin.configure({
    webClientId: WEB_CLIENT_ID,
    offlineAccess: false,
  });
}

async function login() {
  await GoogleSignin.hasPlayServices();
  return await GoogleSignin.signIn();
}

export {configureGoogleSignIn, login, GoogleSigninButton};
