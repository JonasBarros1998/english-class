import {removeItem} from '@storage/removeItem';

export async function removeStorage(key: string) {
  removeItem(key);
}
