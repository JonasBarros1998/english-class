import {select} from '@services/database/repository/search';
import {userList} from '@global/types/userList';
import {userInfo} from '@global/types/userInfo';
import {userList as typeUserList} from '@global/types/userList';
import {USER_STORAGE} from '@global/constants';
import {storageGetItem} from '@storage/getItem';

async function loadPublicCards(datasOfTheList: typeUserList[], listID: string) {
  const where = `publicList/${listID}`;
  await select(where)
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

  return datasOfTheList;
}

async function toLoadPublicListOfTheUserLogged(quantity?: number) {
  const datasOfUser = await toLoadDatasOfUser();
  const datasOfTheList: typeUserList[] = [];
  if (typeof quantity === 'undefined') {
    const datas = await Promise.all(
      datasOfUser.lists.publicLists.map(async function (listID) {
        return await loadPublicCards(datasOfTheList, listID);
      }),
    );

    if (datas.length === 0) {
      return [];
    }

    const [firstElement] = datas;
    return firstElement;
  }

  const datasWithQuantity = await Promise.all(
    datasOfUser.lists.publicLists.map(async function (listID, index) {
      if (index <= quantity - 1) {
        return await loadPublicCards(datasOfTheList, listID);
      }
    }),
  );

  if (datasWithQuantity.length === 0) {
    return [];
  }

  const [firstElement] = datasWithQuantity;
  return firstElement;
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
