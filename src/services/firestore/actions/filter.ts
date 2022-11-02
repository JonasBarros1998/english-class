import {connectCollection} from "../connect";
import {databases} from "../constants/collections";

export async function filterById<Type>(collections: databases, listId: string): Promise<Type[]> {
  const data: any[] = [];

  return connectCollection(collections)
    .where('id', '==', listId)
    .get()
      .then((response) => {
        response.forEach((value) => {
          data.push(value.data());
        });

        return data;
      })
      .catch(function(error) {
        throw error;
      })
}
