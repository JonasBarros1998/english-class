import {Dispatch} from 'redux';

import {selectWithLimit} from '@database/repository/search';
import {storageGetItem} from '@storage/index';
import {USER_STORAGE} from '@global/constants';
import {userList as typeUserList} from '@global/types/userList';
import {userInfo} from '@global/types/userInfo';
import {addUserListInStorage} from '../../offline/addUserListInStorage';

type param = {
  userId?: string;
  dispatch: Dispatch;
};

async function loadPrivateList(params: param) {
  const datasOfTheList: typeUserList[] = [];

  const queryString = await where(params.userId);

  await selectWithLimit(queryString, 10)
    .then(response => {
      response.forEach(list => {
        const dados = list.toJSON();
        if (dados !== null) {
          const datasUserList = dados as typeUserList;
          datasOfTheList.push({
            id: response.key as string,
            listTitle: datasUserList.listTitle,
            cards: datasUserList.cards,
            quantity: datasUserList.quantity,
            user: {
              userName: datasUserList.user.userName,
              photoUrl: datasUserList.user.photoUrl,
            },
          });
        }
      });
    })
    .catch(function (erro) {
      return Promise.reject(new Error(erro.message));
    });
  addUserListInStorage(datasOfTheList);
  return datasOfTheList;
}

async function loadUserId(): Promise<userInfo> {
  return await storageGetItem(USER_STORAGE).then(user => JSON.parse(user));
}

/*
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
}*/

/*
async function loadUserListOffline(): Promise<typeUserList[]> {
  return await searchUserListInStorage(USER_LIST);
}*/

async function where(userId?: string) {
  if (typeof userId !== 'undefined') {
    return `privateList/${userId}`;
  } else {
    const loadUserDataInLocalstorage = await loadUserId();
    return `privateList/${loadUserDataInLocalstorage.uid}`;
  }
}

export {loadPrivateList};
