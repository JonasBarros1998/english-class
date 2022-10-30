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
            lists.push(item.data() as List);
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

