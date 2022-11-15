import { Card } from '@global/interfaces/Card';
import { nanoid } from '@reduxjs/toolkit';
import store from '@state/redux/store';

type params = {
  cardsOfList: Card[],
  title: string
};

function getUserIdInStore() {
  const [firstElement] = store.getState().user;
  return firstElement.id;
}

export function formatDatas(datas: params) {
  return {cardsOfList: datas.cardsOfList, title: datas.title, id: nanoid(), userId: getUserIdInStore()};
}