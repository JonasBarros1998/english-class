import {selectWithLimit} from '@database/repository/search';
import {storageGetItem} from '@storage/index';
import {USER_LIST, USER_STORAGE} from '@global/constants';
import {userList} from '@global/types/userList';
import {userInfo} from '@global/types/userInfo';

import {searchUserListInStorage} from '../../offline/searchUserListInStorage';
import {addUserListInStorage} from '../../offline/addUserListInStorage';

async function loadPrivateList(userId?: string) {
  const datasList: userList[] = [];

  const queryString = await where(userId);

  const checkUserList = await checkUserListOffline();

  if (checkUserList === true) {
    await selectWithLimit(queryString, 10)
      .then(response => {
        response.forEach(list => {
          const dados = list.toJSON();
          if (dados !== null) {
            const datasUserList = dados as userList;
            datasList.push({
              id: response.key as string,
              listTitle: datasUserList.listTitle,
              cards: datasUserList.cards,
              quantity: datasUserList.quantity,
            });
            console.log(datasList, response.key);
          }
        });
      })
      .catch(function (erro) {
        return Promise.reject(new Error(erro.message));
      });
    addUserListInStorage(datasList);
    return datasList;
  }
  console.log(await loadUserListOffline());
  // return await loadUserListOffline();
}

async function loadUserId(): Promise<userInfo> {
  return await storageGetItem(USER_STORAGE).then(user => JSON.parse(user));
}

async function checkUserListOffline() {
  return searchUserListInStorage(USER_LIST)
    .then(function (user) {
      if (user === null) {
        return false;
      }
      return true;
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
}

async function loadUserListOffline(): Promise<userList[]> {
  return await searchUserListInStorage(USER_LIST);
}

async function where(userId?: string) {
  if (typeof userId !== 'undefined') {
    return `privateList/${userId}`;
  } else {
    const loadUserDataInLocalstorage = await loadUserId();
    return `privateList/${loadUserDataInLocalstorage.uid}`;
  }
}

export {loadPrivateList};
