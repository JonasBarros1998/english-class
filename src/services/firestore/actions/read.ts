import {connectCollection} from "../connect";
import {databases} from "../constants/collections";

export async function findAll(collections: databases) {
  return connectCollection(collections)
    .get()
      .then(function(response) {
        
      })
      .catch(function(error) {
        console.error("ERROR FIND_ALL");
        throw error;
      });
};

