import {messagesForUsers} from './../enums/MessagesForUser';
import store from '@pubsub/store';
import {onOff} from '@pubsub/onOffSlice';
import {GooglePLayServices} from '../enums/GooglePlayServices';
import {enableLogin} from './configuration';
import {toAutenticateInFirebase} from './authenticateInFirebase';
import {userSignIn} from '../types';

/**
 * Função para logar o usuario na aplicação
 *
 * @returns {void} Se ocorrer um erro durante o login do usuário, esse
 * erro será capturado e eberto um modal na tela do usuário com a descrição desse erro
 * @returns {userInfo[]} Se o login do usuário funcionar, deve retornar um
 * objeto com as informações do usuário.
 */
async function userSignin(webClientId?: string): Promise<userSignIn | void> {
  return await enableLogin(webClientId)
    .then(async function (sucessLogin) {
      const firebaseAuth = await toAutenticateInFirebase(
        sucessLogin.idToken as string,
      );

      return {
        ...sucessLogin,
        uid: firebaseAuth.uid,
      };
    })
    .catch(function (error: any) {
      const descriptionError = captureError(error);

      store.dispatch(
        onOff({
          status: true,
          message: descriptionError.userMessage,
        }),
      );

      throw new Error(error.message);
    });
}

function captureError(error: {code: string; message: string; stack: string}) {
  const map = new Map();
  map.set(GooglePLayServices.SIGN_IN_CANCELLED, {
    userMessage: messagesForUsers.signInCancelled.message,
  });

  map.set(GooglePLayServices.IN_PROGRESS, {
    userMessage: messagesForUsers.inProgress.message,
  });

  map.set(GooglePLayServices.PLAY_SERVICES_NOT_AVAILABLE, {
    userMessage: messagesForUsers.playServicesNotAvailable.message,
  });

  map.set(GooglePLayServices.SIGN_IN_REQUIRED, {
    userMessage: messagesForUsers.inProgress.message,
  });

  map.set(GooglePLayServices.DEVELOPER_ERROR, {
    userMessage: messagesForUsers.developerError.message,
  });

  return map.get(error.code) as {
    userMessage: string;
  };
}

export {userSignin};
