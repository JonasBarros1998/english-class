import { List } from "@global/interfaces/Card";
import { insert } from "@services/firestore/actions/insert";
import { collections } from "@services/firestore/constants/collections";
import store from "@state/redux/store";
import {nanoid} from "@reduxjs/toolkit";
import {addNewFlashCard, updateFlashCard} from "@state/redux/slices/flashcards";
import {insert as insertStorage} from "@services/storage/insert";
import {read as readStorage} from "@services/storage/read";
import { STORAGE_FLASHCARDS } from "@global/constants";
import { update } from "@services/firestore/actions/update";
import { dispatchToUpdateListStore } from "./dispatchListToStore";
import { FlashCard } from "@global/interfaces/FlashCard";
import { captureErrorException } from "@services/errorTracking/exception/captureErrorException";
import { dispatchToAddNewFlashCard, dispatchToUpdateFlashCard } from "@modules/flash-cards/use-cases/store/dispatch";


export function insertFlashCards(datas: List) {
  const flashCard = formatFlashCardDatas(datas);
  const flashCardInList = formatFlashCardInList(datas, flashCard);
  
  insert({
    collections: collections.flashCards,
    datas: flashCard
  })
    .then(async function() {
      await updateState(flashCard);
      updateFlashCardOnStorage(flashCard);
      
      update({
        collections: collections.lists,
        datas: {flashCards: flashCardInList.flashCards},
        docId: datas.documentId
      });

      dispatchToUpdateListStore({
        ...datas,
        flashCards: flashCardInList.flashCards
      });

    })
    .catch(function(error) {
      console.log(error);
    });
}

function formatFlashCardDatas(datas: List) {
  const [user] = store.getState().user;
  const formatDatas = {
    id: nanoid(),
    lists: {
      id: datas.id,
      title: datas.title,
      quantity: datas.cardsOfList.length
    },
    date: formatDate(),
    userId: user.id,
  };

  return formatDatas;
}

function formatDate() {
  const [dateIsoString] = new Date().toISOString().split('T');
  return dateIsoString;
}

async function updateFlashCardOnStorage(flashCardItem: FlashCard) {
  
  const flashCardStorage = await readStorage<FlashCard[]>(STORAGE_FLASHCARDS)
    .then(item => {
      if (item === null) {
        return [];
      }
      return item;
    })
    .catch(function(error) {
      captureErrorException(new Error(`find flashcard [updateFlashCardOnStorage] ${error.message}`));
      return [] as FlashCard[]
    });
  
  flashCardStorage.push(flashCardItem);

  insertStorage(STORAGE_FLASHCARDS, flashCardStorage)
    .catch(function() {
      captureErrorException(new Error(`ERROR [updateFlashCardOnStorage]: ${JSON.stringify(flashCardStorage)}`));
      console.error("ERROR updateFlashCardOnStorage: ", JSON.stringify(flashCardStorage));
    });
}


/**
 * Atualiza o state de acordo com o storage que esta armazenado no aparelho do usuario
 * Se existir apenas `1` flashcard dentro do state e mais que `1` flashcard dentro do storage
 * quer dizer que o state nao esta sincronizado com o storage do usuario
 */
async function updateState(flashCardItem: FlashCard) {
  const {flashcards} = store.getState().flashcards;

  const flashCardStorage = await readStorage<FlashCard[]>(STORAGE_FLASHCARDS)
    .then(item => item)
    .catch(function(error) {
      captureErrorException(new Error(`find flashcard [updateState] ${error.message}`));
      return flashcards; 
    });

  if(flashCardStorage !== null) {

    if (flashCardStorage.length !== flashcards.length) {
      dispatchToUpdateFlashCard(flashCardStorage);
    }
  }

  dispatchToAddNewFlashCard(flashCardItem);

}

function formatFlashCardInList(datas: List, flashCard: FlashCard) {
  const [user] = store.getState().user;

  const flashCardCopy = Object.assign([], datas.flashCards);
  const listCopy = Object.assign({}, datas);
  
  flashCardCopy.push({
    flashcardId: flashCard.id,
    userId: user.id
  });

  listCopy.flashCards = [...flashCardCopy];

  return listCopy;
}

