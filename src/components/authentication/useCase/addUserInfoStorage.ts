import {storageGetItem, storageSetItem} from '@storage/index';
import {USER_STORAGE} from '../../../global/constants';

async function addUserInfoStorage(value: string) {
  const storage = await storageGetItem(USER_STORAGE);
  console.log('storage >>> ', storage === null);
  if (storage === null) {
    await storageSetItem(USER_STORAGE, JSON.stringify(value));
  }
}

export {addUserInfoStorage};
