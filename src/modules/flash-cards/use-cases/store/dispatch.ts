import store from '@state/redux/store';
import {updateFlashCard, addNewFlashCard, updateResult} from '@state/redux/slices/flashcards';
import { FlashCard, ResultFlashCard } from '@global/interfaces/FlashCard';

export function dispatchToAddNewFlashCard(flashCard: FlashCard) {
  store.dispatch(addNewFlashCard(flashCard));
}

export function dispatchToUpdateFlashCard(flashCard: FlashCard[]) {
  store.dispatch(updateFlashCard(flashCard));
}


export function dispatchToResultFlashCard(result: ResultFlashCard) {
  store.dispatch(updateResult(result))
}