import { STORAGE_FLASHCARDS } from "@global/constants";
import { List } from "@global/interfaces/Card";
import { FlashCard } from "@global/interfaces/FlashCard";
import { read } from "@services/storage/read";
import store from "@state/redux/store";

export function readFlashCards(list: List) {

  const {flashcards} = store.getState().flashcards;

  const flashCard = {
    exist: false
  };


  if (flashcards.length === 0) {

    read<FlashCard[]>(STORAGE_FLASHCARDS)
      .then(function(flashCards) {

        if (flashCards !== null) {
          flashCard.exist = findFlashCard(flashCards, list);
        }
        flashCard.exist = false;
      })
      .catch(function() {
        flashCard.exist = false;
      });
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
