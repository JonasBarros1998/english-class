import {storageGetItem} from '@storage/getItem';
import {USER_STORAGE} from '@global/constants';
import {userInfo} from '@global/types/userInfo';
import {userList as typeUserList} from '@global/types/userList';

async function theUserCanToEditTheList(userOfList: typeUserList) {
  const getUserDatas = (await storageGetItem(USER_STORAGE)) as userInfo;
  if (userOfList.user.id === getUserDatas.user.id) {
    return true;
  }
  return false;
}

export {theUserCanToEditTheList};
