import {storageSetItem} from '@storage/setItem';
import {USER_LIST} from '@global/constants';
import {userList} from '@global/types/userList';

async function addUserListInStorage(list: userList[]) {
  if (typeof list !== 'undefined') {
    return storageSetItem(USER_LIST, JSON.stringify(list));
  }
  throw new Error(
    `param list is ${typeof list}, should receive type Array<userList>`,
  );
}

export {addUserListInStorage};
