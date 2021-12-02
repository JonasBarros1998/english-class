import {select} from '@database/repository/search';
import {storageGetItem} from '@storage/index';
import {USER_STORAGE} from '@global/constants';
import {userList} from '@global/types/userList';
import {userInfo} from '@global/types/userInfo';

async function loadPrivateList() {
  const datasList: userList[] = [];
  const dataOfTheUser = await loadUserId();
  await select(`privateList/${dataOfTheUser.uid}`)
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
          return;
        }
        return;
      });
    })
    .catch(function (erro) {
      return Promise.reject(new Error(erro));
    });

  return datasList;
}

async function loadUserId(): Promise<userInfo> {
  return await storageGetItem(USER_STORAGE).then(user => JSON.parse(user));
}

export {loadPrivateList};
