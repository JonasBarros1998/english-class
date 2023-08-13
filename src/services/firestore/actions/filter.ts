import {connectCollection} from "../connect";
import {databases} from "../constants/collections";

export async function filterById<Type>(collections: databases, listId: string): Promise<Type[]> {
  const data: any[] = [];

  return connectCollection(collections)
    .where('id', '==', listId)
    .get()
      .then((response) => {
        response.forEach((value) => {
          data.push({datas: value.data(), documentId: value.id});
        });

        return data;
      })
      .catch(function(error) {
        throw error;
      })
}

interface params {
  columnName: string, 
  value: string,
}

export async function filterBy<Type>(query: params, collections: databases): Promise<Type[]> {
  const data: any[] = [];

  return connectCollection(collections)
    .where(query.columnName, '==', query.value)
    .get()
      .then((response) => {
        response.forEach((value) => {
          data.push({datas: value.data(), documentId: value.id});
        });

        return data;
      })
      .catch(function(error) {
        throw error;
      })
}
