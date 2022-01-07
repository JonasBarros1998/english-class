import {insert} from '@database/repository/insert';
import {storageGetItem} from '@storage/getItem';
import {USER_STORAGE} from '@global/constants';
import {userInfo} from '@global/types/userInfo';

async function saveUserList(listIsPrivate: boolean, datas: any[]) {
  const storage = await storageGetItem(USER_STORAGE);
  const userData = JSON.parse(storage) as userInfo;
  if (listIsPrivate) {
    if (storage !== null) {
      const where = `privateList/${userData.uid}`;
      await insert(datas, where);
      return;
    }
  }

  const where = `publicList/${userData.uid}`;
  await insert(datas, where);
  return;
}

export {saveUserList};
