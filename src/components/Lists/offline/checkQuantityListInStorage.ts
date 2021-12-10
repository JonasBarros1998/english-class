import {storageGetItem} from '@storage/getItem';
import {USER_LIST} from '@global/constants';
import {userList} from '@global/types/userList';

function checkQuantityListInStorage() {
  return storageGetItem(USER_LIST).then(function (datas: userList[]) {
    if (datas.length === 10) {
      return true;
    }
    return false;
  });
}

export {checkQuantityListInStorage};
