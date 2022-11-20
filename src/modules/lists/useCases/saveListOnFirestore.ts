import { Card } from '@global/interfaces/Card';
import { insert } from '@services/firestore/actions/insert';
import { collections } from "@services/firestore/constants/collections";
import { formatDatas } from './formatDatas';

type params = {
  cardsOfList: Card[],
  title: string
};

export async function saveListOnFirestore(datas: params) {
  return insert({
    collections: collections.lists,
    datas: formatDatas(datas),
  }).catch(function(error) {
      throw error
    })
}


