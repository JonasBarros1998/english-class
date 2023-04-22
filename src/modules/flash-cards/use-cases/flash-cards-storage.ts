import {read} from '@services/storage/read';
import {insert} from '@services/storage/insert';
import {FlashCard} from '@global/interfaces/FlashCard';
import {STORAGE_FLASHCARDS} from '@global/constants';
import { captureErrorException } from '@services/errorTracking/exception/captureErrorException';

export async function findFlashCardsInStorage() {
  return read<FlashCard>(STORAGE_FLASHCARDS)
    .then(function(response) {
      return response
    })
    .catch(function(error) {
      captureErrorException(new Error(error.message));
      throw new Error(error.message);
    });
}

export async function addFlashCardInSTorage(flashCard: FlashCard) {
  return insert(STORAGE_FLASHCARDS, flashCard)
    .then(function() {})
    .catch(function(error) {
      captureErrorException(new Error(error.message));
      throw new Error(error.message);
    });
  
}

export function findFlashCardsOnDatabase(flashCard: FlashCard) {
  
}

