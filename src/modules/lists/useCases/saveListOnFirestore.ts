import { Card } from '@global/interfaces/Card';
import { insert } from '@services/firestore/actions/insert';
import { collections } from "@services/firestore/constants/collections";
import { nanoid } from '@reduxjs/toolkit';

type params = {
  cardsOfList: Card[],
  title: string
};

export async function saveListOnFirestore(datas: params) {
  return insert({
    collections: collections.lists,
    datas: formatDatas(datas),
  }).catch(function(error) {
      console.log("Error function");
      throw error
    })
}


function formatDatas(datas: params) {
  return {cardsOfList: datas.cardsOfList, title: datas.title, id: nanoid()};
}

