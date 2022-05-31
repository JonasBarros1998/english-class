import {Dispatch} from 'redux';
import {insert} from '@services/database/repository/insert';
import {update} from '@services/database/repository/update';
import {userInfo} from '@global/types/userInfo';
import {userList as typeUserList} from '@global/types/userList';
import {storageGetItem} from '@storage/index';
import {USER_STORAGE} from '@global/constants';
import {
  addPrivateListId,
  addPublicListId,
  updateUserDatasOnTheStorageAsync,
} from '@pubsub/reducers/userDatasLogged';
import {addNewPublicListOfUserLogged} from '@pubsub/lists';

type typeParam = {
  userDatas: typeUserList[];
  user: userInfo;
  listIsPrivate: boolean;
  dispatch: Dispatch | any;
};

type saveUserListParams = {
  listIsPrivate: boolean;
  datas: any[];
  userDatas: userInfo;
  dispatch: Dispatch | any;
};

async function saveUserList(params: saveUserListParams) {
  if (params.listIsPrivate) {
    if (params.userDatas !== null) {
      const where = `privateList/${params.userDatas.uid}`;
      const userList = await insert(params.datas, where);
      addListIdOnTheUser({
        listIsPrivate: true,
        user: params.userDatas,
        userDatas: userList,
        dispatch: params.dispatch,
      });
      return;
    }
  }
  const where = 'publicList/';

  const userPublicList = await insert(params.datas, where);
  params.dispatch(addNewPublicListOfUserLogged(params.datas));

  addListIdOnTheUser({
    listIsPrivate: false,
    user: params.userDatas,
    userDatas: userPublicList,
    dispatch: params.dispatch,
  });
  return;
}

async function addListIdOnTheUser(params: typeParam) {
  const {listIsPrivate, user, userDatas} = params;
  userDatas.map(async function (list: typeUserList) {
    const where = `users/${user.uid}/${user.id}/lists`;

    if (typeof list.id !== 'undefined') {
      if (listIsPrivate) {
        params.dispatch(addPrivateListId({id: list.id}));
        params.dispatch(updateUserDatasOnTheStorageAsync());
        await updateDatabase(where);
      } else {
        params.dispatch(addPublicListId({id: list.id}));
        params.dispatch(updateUserDatasOnTheStorageAsync());
        await updateDatabase(where);
      }
    }
  });
}

async function updateDatabase(where: string) {
  const userDatas = (await storageGetItem(USER_STORAGE)) as userInfo;
  await update(userDatas.lists, where);

  return {
    queryString: where,
    datas: userDatas.lists.privateLists,
  };
}

export {saveUserList, addListIdOnTheUser};
