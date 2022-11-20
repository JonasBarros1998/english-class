import { Card, List } from '@global/interfaces/Card';
import { User } from '@global/interfaces/User';
import { update } from '@services/firestore/actions/update';
import { collections } from '@services/firestore/constants/collections';
import state from '@state/redux/store';
import { formatDatas } from './formatDatas';

type params = {
  cardsOfList: Card[],
  title: string
};

export async function updateList(datas: params) {
  await update({
    collections: collections.lists,
    docId: getDocumentIdOnStore(),
    datas: formatDatas(datas) 
  });
}

export function getUserDataOnStore(): User[] {
  return state.getState().user
}

//Check if the user can edit this list
export function checkUserPermission(list: List): boolean {
  const [userData] = getUserDataOnStore();

  if (list.userId === userData.id) {
    return true;
  }
  return false;
}


export function getDocumentIdOnStore() {
  return state.getState().readList.docId;
}


