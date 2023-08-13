
import {ListOnDatabase} from "@global/interfaces/Card";
import {FlashCardDatabase} from "@global/interfaces/FlashCard";
import { captureErrorException } from "@services/errorTracking/exception/captureErrorException";
import {filterBy} from "@services/firestore/actions/filter";
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


export async function findListOnDatabase(listId: string) {

  const query = {columnName: "listId", value: listId}
    
  return filterBy<ListOnDatabase>(query, collections.lists)
    .then((response) => response)
    .catch(function(error) {
      throw error.message;
    });
}


