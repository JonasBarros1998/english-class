import { findAll } from "@services/firestore/actions/read";
import { collections } from "@services/firestore/constants/collections";
import { dispatchAllListToStore } from "./dispatchListToStore";

export async function findAllLists(): Promise<void> {
  return await findAll(collections.lists)
    .then(function(response) {
      dispatchAllListToStore(response);
    })
    .catch((error) => {
      throw error;
    })
    
}
