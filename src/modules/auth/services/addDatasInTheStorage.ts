import {storageSetItem} from '@storage/setItem';

export function addDatasInTheStorage(key: string, datas: string) {
  storageSetItem(key, datas);
}
