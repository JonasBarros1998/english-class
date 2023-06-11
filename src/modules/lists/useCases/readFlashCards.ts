import { STORAGE_FLASHCARDS } from "@global/constants";
import { List } from "@global/interfaces/Card";
import { FlashCard, FlashCardDatabase } from "@global/interfaces/FlashCard";
import { filterBy } from "@services/firestore/actions/filter";
import { collections } from "@services/firestore/constants/collections";
import { read } from "@services/storage/read";
import store from "@state/redux/store";

export async function readFlashCards(list: List) {

  const {flashcards} = store.getState().flashcards;

  const flashCard = {
    exist: false
  };


  if (flashcards.length === 0) {

    (await read<FlashCard[]>(STORAGE_FLASHCARDS)
      .then(async function(flashCards) {

        if (flashCards !== null) {
          flashCard.exist = findFlashCard(flashCards, list);
        } else {


          /**
           * Se nao existir nenhum flashcard no storage do usuario, 
           * deve-se procurar no banco por aquele flashcard
           */
          const flashCardsOnDatabase = (await findFlashCardOnDatabase(list));
          flashCard.exist = findFlashCard(flashCardsOnDatabase, list);
        }
      })
      .catch(function() {
        flashCard.exist = false;
      }));
  } else {
    flashCard.exist = findFlashCard(flashcards, list);
  }

  return flashCard;
}

function findFlashCard(flashCards: FlashCard[], list: List) {
  const flashCardsFilter = flashCards.find((flashCardItem) => flashCardItem.lists === list.id);
  if (typeof flashCardsFilter !== 'undefined') {
    return true;
  }

  return false;
}

async function findFlashCardOnDatabase(list: List): Promise<FlashCard[]> {
  const flashCardItem: FlashCard[] = [];

  return filterBy<FlashCardDatabase>({columnName: "lists", value: list.id}, collections.flashCards)
    .then(function(flashcard) {
      flashCardItem.push(flashcard[0].datas);
      return flashCardItem;
    })
    .catch(function() {
      throw new Error("Error");
    });
}