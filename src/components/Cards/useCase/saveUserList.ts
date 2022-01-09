import {insert} from '@database/repository/insert';
import {storageGetItem, storageSetItem} from '@storage/index';
import {USER_STORAGE} from '@global/constants';
import {userInfo} from '@global/types/userInfo';
import {update} from '@database/repository/update';
import {userList as typeUserList} from '@global/types/userList';

type typeParam = {
  userDatas: typeUserList[];
  user: userInfo;
  listIsPrivate: boolean;
};

async function saveUserList(listIsPrivate: boolean, datas: any[]) {
  const storage = (await storageGetItem(USER_STORAGE)) as userInfo;

  if (listIsPrivate) {
    if (storage !== null) {
      const where = `privateList/${storage.uid}`;
      const userList = await insert(datas, where);
      addListIdOnUser({
        listIsPrivate: true,
        user: storage,
        userDatas: userList,
      });
      return;
    }
  }
  const where = `publicList/${storage.uid}`;
  const userPublicList = await insert(datas, where);
  addListIdOnUser({
    listIsPrivate: false,
    user: storage,
    userDatas: userPublicList,
  });
  return;
}

async function addListIdOnUser(params: typeParam) {
  const {listIsPrivate, user, userDatas} = params;
  const copyUser = Object.assign(params.user, {});

  userDatas.map(async function (list: typeUserList) {
    const where = `users/${user.uid}/${user.user}`;
    if (typeof list.id !== 'undefined') {
      if (listIsPrivate) {
        copyUser.lists.privateLists.push(list.id as string);
      } else {
        copyUser.lists.publicLists.push(list.id as string);
      }

      await update(user, where);
      updateStorage(user);
    }
  });
}

async function updateStorage(user: userInfo) {
  const userStringfy = JSON.stringify(user);
  storageSetItem(USER_STORAGE, userStringfy);
}

export {saveUserList, addListIdOnUser};
