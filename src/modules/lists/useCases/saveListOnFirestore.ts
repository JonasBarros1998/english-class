import { Card } from '@global/interfaces/Card';
import { insert } from '@services/firestore/actions/insert';
import { collections } from "@services/firestore/constants/collections";
import { nanoid } from '@reduxjs/toolkit';
import store from '@state/redux/store';

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


function formatDatas(datas: params) {
  return {cardsOfList: datas.cardsOfList, title: datas.title, id: nanoid(), userId: getUserIdInStore()};
}

function getUserIdInStore() {
  const [firstElement] = store.getState().user;
  return firstElement.id;
}
