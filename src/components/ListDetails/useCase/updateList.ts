import {update} from '@database/repository/update';
import {userList as typeUserList} from '@global/types/userList';
import {userInfo} from '@global/types/userInfo';
import {storageGetItem} from '@storage/getItem';
import {USER_STORAGE} from '@global/constants';

async function updateListDetails(userList: typeUserList, typeOfTheList: boolean) {
  const getUserDatas = (await storageGetItem(USER_STORAGE)) as userInfo;
  console.log('typeOfTheList ', typeOfTheList);
  if (typeof typeOfTheList === 'undefined' || typeOfTheList === false) {
    const where = `privateList/${getUserDatas.uid}/${userList.id}`;
    await update(userList, where);
    return userList;
  }
  const whereForPrivateList = `publicList/${userList.id}`;
  await update(userList, whereForPrivateList);
  return userList;
}

export {updateListDetails};
