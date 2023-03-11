import { captureErrorException } from "@services/errorTracking/exception/captureErrorException";
import { findAll } from "@services/firestore/actions/read";
import { collections } from "@services/firestore/constants/collections";
import { onLoadContent } from "../tracking/events";
import { dispatchAllListToStore } from "./dispatchListToStore";

export async function findAllLists(): Promise<void> {
  return await findAll(collections.lists)
    .then(function(response) {
      onLoadContent();
      dispatchAllListToStore(response);
    })
    .catch((error) => {
      captureErrorException(new Error(error.message))
      throw error.message;
    })
    
}
