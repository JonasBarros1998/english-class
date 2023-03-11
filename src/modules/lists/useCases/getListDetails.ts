import { List } from '@global/interfaces/Card';
import {filterById} from '@services/firestore/actions/filter';
import {collections} from "@services/firestore/constants/collections";
import state from '@state/redux/store';
import {docId} from '@state/redux/slices/readList';
import { checkUserPermission } from './updateList';
import { captureErrorException } from '@services/errorTracking/exception/captureErrorException';

export async function getListDetails(listId: string): Promise<List> {

  return filterById<{datas: List, documentId: string}>(collections.lists, listId)
    .then(function(response) {
      const [{datas, documentId}] = response;
      state.dispatch(docId(documentId));
      return datas;
    })
    .catch((error: Error) => {
      captureErrorException(new Error(error.message))
      throw error.message;
    });

}

export function getListDetailsOnStore(): {current: List} {
  return state.getState().readList.lists;
}

export function showEditarButton() {
  const {current} = getListDetailsOnStore();
  return checkUserPermission(current);
}
