import {insert} from '@database/repository/insert';
import {storageGetItem} from '@storage/getItem';
import {USER_STORAGE} from '@global/constants';
import {userInfo} from '@global/types/userInfo';

async function saveUserList(listIsPrivate: boolean, datas: any[]) {
  const storage = await storageGetItem(USER_STORAGE);
  if (listIsPrivate) {
    if (storage !== null) {
      const userData = JSON.parse(storage) as userInfo;
      const where = `privateList/${userData.uid}`;
      await insert(datas, where);
      return;
    }
  }

  const userData = JSON.parse(storage) as userInfo;
  const [data] = datas;
  const userListWithUid = Object.defineProperty(data, 'userId', {
    enumerable: true,
    writable: true,
    configurable: true,
    value: userData.uid,
  });

  await insert([userListWithUid], 'publicList');
  return;
}

export {saveUserList};
