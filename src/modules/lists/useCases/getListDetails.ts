import { List } from '@global/interfaces/Card';
import {filterById} from '@services/firestore/actions/filter';
import {collections} from "@services/firestore/constants/collections";

export async function getListDetails(listId: string): Promise<List[]> {

  return filterById<List>(collections.lists, listId)
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      throw error;
    });

}

