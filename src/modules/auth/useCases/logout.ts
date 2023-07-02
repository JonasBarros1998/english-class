import {remove} from '@services/storage/delete';
import {STORAGE_USER, STORAGE_FLASHCARDS} from '@global/constants';
import store from '@state/redux/store';
import {removeUser} from '@state/redux/slices/user';

export async function removeUserDataInLocalStorage() {
  await remove(STORAGE_USER);
}

export async function removeFlashCardInLocalStorage() {
  await remove(STORAGE_FLASHCARDS);
}

export function clearUserDatas() {
  store.dispatch(removeUser());
}
