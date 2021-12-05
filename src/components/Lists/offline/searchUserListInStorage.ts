import {storageGetItem} from '@storage/getItem';

function searchUserListInStorage(storageName: string) {
  return storageGetItem(storageName);
}

export {searchUserListInStorage};
