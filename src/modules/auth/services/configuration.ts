import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {WEB_CLIENT_ID} from 'react-native-dotenv';

function configureGoogleSignIn(webClientId?: string) {
  const webClientIdIsUndefined = typeof webClientId !== 'undefined';
  console.log(webClientIdIsUndefined, WEB_CLIENT_ID);
  GoogleSignin.configure({
    webClientId: webClientIdIsUndefined === true ? webClientId : WEB_CLIENT_ID,
    offlineAccess: false,
  });
}

async function enableLogin(webClientId?: string) {
  configureGoogleSignIn(webClientId);
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

export {
  configureGoogleSignIn,
  enableLogin,
  logout,
  GoogleSigninButton,
  currentUser,
};
