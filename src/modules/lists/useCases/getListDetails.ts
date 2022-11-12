import { List } from '@global/interfaces/Card';
import {filterById} from '@services/firestore/actions/filter';
import {collections} from "@services/firestore/constants/collections";
import state from '@state/redux/store';

export async function getListDetails(listId: string): Promise<List[]> {

  return filterById<List>(collections.lists, listId)
    .then(function(response) {
      return response;
    })
    .catch((error) => {throw error});

}

export function getListDetailsOnStore(): {current: List} {
  return state.getState().readList.lists;
}