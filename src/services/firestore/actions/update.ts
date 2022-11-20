import { databases } from "../constants/collections";
import {connectCollection} from "../connect";

type params = { 
  collections: databases; 
  datas: any;
  docId: string
}

export async function update({collections, datas, docId}: params) {
  connectCollection(collections)
    .doc(docId)
    .update(datas)
    .catch(function(error) {
      console.error("ERROR UPDATE");
      throw error;
    });

}