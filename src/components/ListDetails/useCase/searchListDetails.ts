import {storageGetItem} from '@storage/getItem';
import {USER_STORAGE} from '@global/constants';
import {userInfo} from '@global/types/userInfo';

async function loadUserDataOfStorage(): Promise<userInfo> {
  return storageGetItem(USER_STORAGE)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      throw new Error(error.message);
    });
}

export {loadUserDataOfStorage};
