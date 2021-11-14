import {login} from '@auth/googleSignin/index';
import {Dispatch} from 'redux';
import {onOff} from '@pubsub/onOffSlice';
import {addUserInfoStorage} from './addUserInfoStorage';
import {PLAY_SERVICES_NOT_AVAILABLE, SIGN_IN_CANCELLED} from '../constants';

async function userSignin(dispatch: Dispatch) {
  login()
    .then(async function (sucessLogin) {
      await addUserInfoStorage(JSON.stringify(sucessLogin));
    })
    .catch(function (error: any) {
      if (error.message === PLAY_SERVICES_NOT_AVAILABLE) {
        dispatch(
          onOff({
            status: true,
            message: 'play service indisponível',
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
      }

      dispatch(
        onOff({
          status: true,
          message: 'Um erro ocorreu, tente novamente mais tarde',
        }),
      );
    });
}

export {userSignin};
