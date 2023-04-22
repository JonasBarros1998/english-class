import store from '@state/redux/store';
import {addNewFlashCard} from '@state/redux/slices/flashcards';
import { FlashCard } from '@global/interfaces/FlashCard';

export async function addFlashCardInStore(flashCard: FlashCard) {
  store.dispatch(addNewFlashCard(flashCard));
}