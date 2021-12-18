import {select} from '@database/repository/search';
import {storageGetItem} from '@storage/getItem';
import {USER_STORAGE} from '@global/constants';
import {userInfo} from '@global/types/userInfo';

type params = {
  type: 'privateList' | 'publicList';
  listId: string;
};

async function searchListDetails(params: params) {
  const userOfData = await loadUserDataOfStorage();
  const where = `${params.type}/${userOfData.uid}/${params.listId}`;
  select(where)
    .then(function (response: any) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

async function loadUserDataOfStorage(): Promise<userInfo> {
  return storageGetItem(USER_STORAGE)
    .then(function (response: string) {
      return JSON.parse(response);
    })
    .catch(function (error) {
      throw new Error(error.message);
    });
}

export {searchListDetails};
