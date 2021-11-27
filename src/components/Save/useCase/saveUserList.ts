import {insert} from '@database/repository/insert';
import {storageGetItem} from '@storage/getItem';
import {USER_STORAGE} from '@global/constants';
import {userInfo} from '@global/types/userInfo';

async function saveUserList(listIsPrivate: boolean, datas: any) {
  if (listIsPrivate) {
    const storage = await storageGetItem(USER_STORAGE);
    if (storage !== null) {
      const userData = JSON.parse(storage) as userInfo;
      const where = `privateList/${userData.uid}`;
      await insert(datas, where);
    }
  }
}

export {saveUserList};
