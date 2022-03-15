import {storageSetItem} from '@storage/setItem';

export async function addDatasInTheStorage(key: string, datas: string) {
  storageSetItem(key, datas);
}
