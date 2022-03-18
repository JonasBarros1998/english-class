import {logout} from '../services/configuration';
import {dispatchAction} from '../services/dispatchUserAction';
import {removeStorage} from '../services/removeStorage';
import {USER_STORAGE} from '@global/constants';

async function logoutUser() {
  await logout();
  dispatchAction(false);
  removeStorage(USER_STORAGE);
}

export {logoutUser};
