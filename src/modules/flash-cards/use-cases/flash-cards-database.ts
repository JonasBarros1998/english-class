
import {ListOnDatabase} from "@global/interfaces/Card";
import {FlashCardDatabase} from "@global/interfaces/FlashCard";
import { captureErrorException } from "@services/errorTracking/exception/captureErrorException";
import {filterById, filterBy} from "@services/firestore/actions/filter";
import {collections} from '@services/firestore/constants/collections';
import store from '@state/redux/store';

export async function findFlashCardsOnDatabase() {
  const [user] = store.getState().user;

  const query = {columnName: "userId", value: user.id};
  
  return filterBy<FlashCardDatabase>(query, collections.flashCards)
    .then(function(response) {
      if(response.length === 0) {
        return null;
      }

      return response;
    })
    .catch(function(error) {
      const message = `${error.message} | findFlashCardsOnDatabase | ${JSON.stringify(query)}`;
      const err = new Error(message);
      captureErrorException(err);
      throw new Error(message);
    });
}


export async function findListOnDatabase(flashCardDatabase: FlashCardDatabase[]) {

  const listDatas: any[] = [];

  const datas = flashCardDatabase.map(async (item) => {
    
    return filterById<ListOnDatabase>(collections.lists, item.datas.lists)
      .then((response) => response)
      .catch(function(error) {
        throw error.message;
      });
  });

  await Promise.all(datas)
    .then((lists) => lists.map(item => listDatas.push(...item)))
    .catch(function(error) {
      throw error.message;
    });

  return listDatas;
}


