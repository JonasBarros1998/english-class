import {storageGetItem} from '@storage/getItem';
import {userSignIn} from '../types';

export async function getUserDataInTheStorage(
  key: string,
): Promise<userSignIn> {
  return storageGetItem(key);
}
