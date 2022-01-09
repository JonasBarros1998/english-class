import {select} from '@database/repository/search';
import {userList} from '@global/types/userList';
import {userInfo} from '@global/types/userInfo';
import {userList as typeUserList} from '@global/types/userList';
import {USER_STORAGE} from '@global/constants';
import {storageGetItem} from '@storage/getItem';

async function loadPublicListOfUserLogged(): Promise<userList[] | null> {
  const datasOfUser = await toLoadDatasOfUser();
  loadAllPublicList();
  const where = `publicList/${datasOfUser.uid}`;

  const datasOfTheList: typeUserList[] = [];

  return select(where)
    .then(function (response) {
      const datas = response.toJSON();
      if (datas === null) {
        return null;
      }

      response.forEach(function (response) {
        const datasPublicList = response.toJSON() as typeUserList;
        datasOfTheList.push({
          id: datasPublicList.id,
          listTitle: datasPublicList.listTitle,
          cards: datasPublicList.cards,
          quantity: datasPublicList.quantity,
          user: {
            id: datasPublicList.user.id,
            userName: datasPublicList.user.userName,
            photoUrl: datasPublicList.user.photoUrl,
          },
        });
      });

      return datasOfTheList;
    })
    .catch(function (error) {
      throw new Error(error.message);
    });
}

async function loadAllPublicList() {
  const datasOfUser = await toLoadDatasOfUser();
  const where = `publicList/${datasOfUser.uid}`;

  return select(where)
    .then(function (response) {
      const datas = response.toJSON();
      if (datas === null) {
        return null;
      }
      const rp = response.forEach(function (listItem: any) {
        return listItem;
      });
      console.log(rp);
    })
    .catch(function (error) {
      throw new Error(error.message);
    });
}

async function toLoadDatasOfUser(): Promise<userInfo> {
  return await storageGetItem(USER_STORAGE);
}

export {loadPublicListOfUserLogged, loadAllPublicList};
