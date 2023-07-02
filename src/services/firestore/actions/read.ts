import { List } from "@global/interfaces/Card";
import {connectCollection} from "../connect";
import {databases} from "../constants/collections";

export async function findAll(collections: databases) {
  const lists: List[] = [];

  await connectCollection(collections)
    .get()
      .then(function(response) {
        if (response.empty === false) {
          response.forEach((item) => {
            const listItem = {
              documentId: item.id,
              ...item.data(),
            } as List;
            
            lists.push(listItem);
          })
        }
        else return lists
        
      })
      .catch(function(error) {
        console.error("ERROR FIND_ALL");
        throw error;
      });
  
  return Promise.resolve(lists);
};

