import { Card } from '@global/interfaces/Card';
import { insert } from '@services/firestore/actions/insert';
import { collections } from "@services/firestore/constants/collections";
import { formatDatas } from './formatDatas';
import { findAllLists } from './readLists';

type params = {
  cardsOfList: Card[],
  title: string
};

export async function saveListOnFirestore(datas: params) {
  return insert({
    collections: collections.lists,
    datas: formatDatas(datas),
  })
  .then(async function() {
    findAllLists();
  })
  
  .catch(function(error) {
      throw error
    })
}


