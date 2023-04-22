import store from '@state/redux/store';
import {updateFlashCard, addNewFlashCard} from '@state/redux/slices/flashcards';
import { FlashCard } from '@global/interfaces/FlashCard';

export function dispatchToFlashCardSlice(flashCard: FlashCard) {
  store.dispatch(addNewFlashCard(flashCard));
}

export function dispatchToUpdateFlashCard(flashCard: FlashCard[]) {
  store.dispatch(updateFlashCard(flashCard));
}