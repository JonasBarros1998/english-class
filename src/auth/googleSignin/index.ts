import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

function configureGoogleSignIn() {
  GoogleSignin.configure({
    webClientId:
      '519409752763-578ilmabag855pmh80u554m1v6v99utf.apps.googleusercontent.com',
  });
}

async function onGoogleButtonPress() {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

export {configureGoogleSignIn, onGoogleButtonPress};
