import { List } from "@global/interfaces/Card";
import { insert } from "@services/firestore/actions/insert";
import { collections } from "@services/firestore/constants/collections";
import store from "@state/redux/store";
import {nanoid} from "@reduxjs/toolkit";
import {addNewFlashCard} from "@state/redux/slices/flashcards";
import {insert as insertStorage} from "@services/storage/insert";
import { STORAGE_FLASHCARDS } from "@global/constants";
import { FlashCard } from "@global/interfaces/FlashCard";


export function insertFlashCards(datas: List) {
  const flashCard = formatFlashCardDatas(datas);

  insert({
    collections: collections.flashCards,
    datas: flashCard
  })
    .then(function() {
      store.dispatch(addNewFlashCard(flashCard));
      updateFlashCardOnStorage();
    })
    .catch(function(error) {
      console.log(error);
    });
}

function formatFlashCardDatas(datas: List) {
  const [user] = store.getState().user;
  const formatDatas = {
    id: nanoid(),
    lists: datas.id,
    date: formatDate(),
    userId: user.id,
  };

  return formatDatas;
}

function formatDate() {
  const [dateIsoString] = new Date().toISOString().split('T');
  return dateIsoString;
}

function updateFlashCardOnStorage() {
  const {flashcards} = store.getState().flashcards;
  insertStorage(STORAGE_FLASHCARDS, flashcards)
    .catch(function() {
      console.error("ERROR updateFlashCardOnStorage: ", JSON.stringify(flashcards));
    });
}

