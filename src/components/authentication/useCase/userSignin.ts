import {login} from '@auth/googleSignin/index';
import {Dispatch} from 'redux';
import {onOff} from '@pubsub/slices';
import {PLAY_SERVICES_NOT_AVAILABLE, SIGN_IN_CANCELLED} from '../constants';
import {saveUserInfo} from './saveUserInfo';
import auth from '@react-native-firebase/auth';

async function userSignin(dispatch: Dispatch) {
  return await login()
    .then(async function (sucessLogin) {
      if (sucessLogin.idToken !== null) {
        const firebaseAuth = await toAutenticateFirebase(sucessLogin.idToken);
        if (firebaseAuth !== null) {
          const userData = {
            ...sucessLogin,
            uid: firebaseAuth.uid,
            lists: {
              publicLists: [],
              privateLists: [],
            },
          };
          const userInfo = await saveUserInfo(firebaseAuth.uid, userData);
          return userInfo;
        }
      }
    })
    .catch(function (error: any) {
      if (error.message === PLAY_SERVICES_NOT_AVAILABLE) {
        dispatch(
          onOff({
            status: true,
            message: 'google play service indisponível',
          }),
        );
        return;
      }

      if (error.message === SIGN_IN_CANCELLED) {
        dispatch(
          onOff({
            status: true,
            message: 'processo cancelado',
          }),
        );
        return;
      }

      dispatch(
        onOff({
          status: true,
          message: 'Um erro ocorreu, tente novamente mais tarde',
        }),
      );
      return;
    });
}

async function toAutenticateFirebase(
  tokenId: string,
): Promise<{uid: string} | null> {
  return new Promise(async (resolve, reject) => {
    const googleCredential = auth.GoogleAuthProvider.credential(tokenId);
    await auth().signInWithCredential(googleCredential);
    auth().onAuthStateChanged(user => {
      if (user !== null) {
        resolve({uid: user.uid});
        return;
      }
      resolve(null);
      return;
    });
  });
}

export {userSignin};
