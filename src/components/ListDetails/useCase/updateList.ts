import {update} from '@services/database/repository/update';
import {userList as typeUserList} from '@global/types/userList';
import {userInfo} from '@global/types/userInfo';
import {storageGetItem} from '@storage/getItem';
import {USER_STORAGE} from '@global/constants';
import store from '@pubsub/store';
import {updateOnePublicList, updateOnePrivateList} from '@pubsub/lists';

async function updateListDetails(
  userList: typeUserList,
  typeOfTheList: boolean,
) {
  const getUserDatas = (await storageGetItem(USER_STORAGE)) as userInfo;
  if (typeof typeOfTheList === 'undefined' || typeOfTheList === false) {
    const where = `privateList/${getUserDatas.uid}/${userList.id}`;
    await update(userList, where);
    store.dispatch(updateOnePrivateList(userList));
    return userList;
  }
  const whereForPrivateList = `publicList/${userList.id}`;
  await update(userList, whereForPrivateList);
  store.dispatch(updateOnePublicList(userList));
  return userList;
}

export {updateListDetails};
