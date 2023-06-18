import { Card } from '@global/interfaces/Card';
import { captureErrorException } from '@services/errorTracking/exception/captureErrorException';
import { insert } from '@services/firestore/actions/insert';
import { collections } from "@services/firestore/constants/collections";
import { onClickSaveList } from '../tracking/events';
import { formatDatas } from './formatDatas';
import { findAllLists } from './readLists';
import { titleValidation } from './validations';

type params = {
  cardsOfList: Card[],
  title: string
};

export async function saveListOnFirestore(datas: params) {
  titleValidation(datas.title);

  return insert({
    collections: collections.lists,
    datas: formatDatas(datas),
  })
  .then(async function() {
    onClickSaveList({
      title: datas.title,
      cards: datas.cardsOfList
    });

    findAllLists();
  })
  
  .catch(function(error: Error) {
      captureErrorException(new Error(error.message));
      throw error.message;
    })
}


