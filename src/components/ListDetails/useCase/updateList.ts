import {update} from '@database/repository/update';
import {userList as typeUserList} from '@global/types/userList';
import {userInfo} from '@global/types/userInfo';
import {storageGetItem} from '@storage/getItem';
import {USER_STORAGE} from '@global/constants';

async function updateListDetails(userList: typeUserList) {
  const getUserDatas = (await storageGetItem(USER_STORAGE)) as userInfo;
  const where = `privateList/${getUserDatas.uid}/${userList.id}`;
  await update(userList, where);
  return userList;
}

export {updateListDetails};
