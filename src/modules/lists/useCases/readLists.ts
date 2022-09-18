import { findAll } from "@services/firestore/actions/read";
import { collections } from "@services/firestore/constants/collections";

export async function findAllLists() {
  return await findAll(collections.lists)
    .then(function(response) {
      return response;
    })
    .catch((error) => {throw error;})
    
}
