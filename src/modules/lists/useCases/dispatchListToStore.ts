import { List } from '@global/interfaces/Card';
import {current, allLists, updatelist} from '@state/redux/slices/readList';
import store from '@state/redux/store';

export async function dispatchCurrentListToStore(list: List) {
  store.dispatch(current(list));
}

export function dispatchAllListToStore(lists: List[]) {
  store.dispatch(allLists(lists));
}

export function dispatchToUpdateListStore(list: List) {
  store.dispatch(updatelist(list));

}