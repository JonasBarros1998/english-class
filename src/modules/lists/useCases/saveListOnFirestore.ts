import { Card } from '@global/interfaces/Card';
import { insert } from '@services/firestore/actions/insert';
import { collections } from "@services/firestore/constants/collections";

type params = {
  cardsOfList: Card[],
  title: string
};

export function saveListOnFirestore(datas: params) {
  insert({
    collections: collections.lists,
    datas: formatDatas(datas),
  }).catch(function(error) {
      throw error
    })
}


function formatDatas(datas: params) {
  return {cardsOfList: datas.cardsOfList, title: datas.title};
}

