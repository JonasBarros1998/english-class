import {FlashCardDatabase, FlashCard} from '@global/interfaces/FlashCard';
import {findFlashCardsOnDatabase} from './flash-cards-database';
import {addFlashCardInSTorage} from './flash-cards-storage'
import {findFlashCardsInStorage} from './flash-cards-storage';
import {dispatchToUpdateFlashCard} from './store/dispatch';
import store from '@state/redux/store';
import { filterBy } from '@services/firestore/actions/filter';
import { collections } from '@services/firestore/constants/collections';
import { List, ListOnDatabase } from '@global/interfaces/Card';

export async function managerFlashCards() {

  const flashCardInMemory = existFlashCardInMemory();

  if(flashCardInMemory === null) {

    return await searchFlashCardInStorage()
      .then(function(item) {

        if(item !== null) {
          return item;
        }

        return searchFlashCardOnDatabase()
          .then((item) => item)
          .catch(() =>  null);
      });
  }

  return flashCardInMemory;
}

function mountFlashCardObject(flashCards: FlashCardDatabase[]) {
  
  const flashCardObject: FlashCard[] = [];

  flashCards.map(function(flashCardItem) {
    flashCardObject.push({
      date: flashCardItem.datas.date,
      id: flashCardItem.datas.id,
      lists: flashCardItem.datas.lists
    });
  });

  return flashCardObject;

} 

function existFlashCardInMemory() {
  const {flashcards} = store.getState().flashcards;

  if (flashcards.length === 0) {
    return null;
  }

  return flashcards;
}


async function searchFlashCardInStorage() {

  return await findFlashCardsInStorage()
    .then(async function(response) {
      if(response !== null) {
        dispatchToUpdateFlashCard(response);
        return response;
      }
      return null;

    })
    .catch(function() {
      console.log("Um erro ocorreu na consulta de flashcards")
      throw new Error("Um erro ocorreu na consulta de flashcards");
    });

}

async function searchFlashCardOnDatabase() {

  /**
   * Se não existir flashCard no banco, não precisa fazer a consulta 
   * da lista relacionada ao flashcard
   */
  return await findFlashCardsOnDatabase()
    .then(async function(flashcards) {
      if (flashcards === null) {
        return null;
      }

      const flashCardObject = mountFlashCardObject(flashcards);
      addFlashCardInSTorage(flashCardObject);
      dispatchToUpdateFlashCard(flashCardObject);

      return flashCardObject;

    })
    .catch(function(error) {
      console.log("findFlashCardsOnDatabase ERROR >> ", error);
      throw new Error("Error ocorreu consulta findFlashCardsOnDatabase");
    });
  
}

/**
 * Pesquisa a lista que esta relacionada ao flash card
 * que o usuario clicou
 */
export async function searchListOnFlashCard(flashCardId: string): Promise<List> {

  const {flashcards} = store.getState().flashcards;

  const flashCardItem = flashcards.filter((item) => {
    if(item.id === flashCardId) return item;
  });

  const [{lists}] = flashCardItem;

  const query = {columnName: "id", value: lists};
    
  return filterBy<ListOnDatabase>(query, collections.lists)
    .then((response) => {
      const [{datas}] = response;
      return datas;
    })
    .catch(function(error) {
      throw error.message;
    });
}
