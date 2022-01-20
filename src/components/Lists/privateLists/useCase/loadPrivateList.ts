import {Dispatch} from 'redux';

import {select} from '@database/repository/search';
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

  await select(queryString)
    .then(response => {
      response.forEach(list => {
        const dados = list.toJSON();
        if (dados !== null) {
          const datasUserList = dados as typeUserList;
          datasOfTheList.push(datasUserList);
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
  return await storageGetItem(USER_STORAGE).then(user => user);
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
