import {select} from '@database/repository/search';
import {userList} from '@global/types/userList';
import {userInfo} from '@global/types/userInfo';
import {userList as typeUserList} from '@global/types/userList';
import {USER_STORAGE} from '@global/constants';
import {storageGetItem} from '@storage/getItem';

async function toLoadPublicListOfTheUserLogged(quantity?: number) {
  const datasOfUser = await toLoadDatasOfUser();

  const datasOfTheList: typeUserList[] = [];

  await Promise.all(
    datasOfUser.lists.publicLists.map(async function (listId) {
      const where = `publicList/${listId}`;
      await select(where, quantity)
        .then(function (response) {
          const datas = response.toJSON();
          if (datas === null) {
            return null;
          }
          datasOfTheList.push(datas as typeUserList);
        })
        .catch(function (error) {
          throw new Error(error.message);
        });
    }),
  );

  return datasOfTheList;
}

async function loadAllPublicListOfTheUserLogged() {
  const datasOfTheList: typeUserList[] = [];

  const where = 'publicList/';

  await select(where)
    .then(function (response) {
      response.forEach(item => {
        const datas = item.toJSON() as userList;
        datasOfTheList.push(datas);
      });
    })
    .catch(function (error) {
      throw new Error(error.message);
    });
  return datasOfTheList;
}

async function toLoadDatasOfUser(): Promise<userInfo> {
  return await storageGetItem(USER_STORAGE);
}

export {toLoadPublicListOfTheUserLogged, loadAllPublicListOfTheUserLogged};
