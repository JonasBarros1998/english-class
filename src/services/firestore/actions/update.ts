import { databases } from "../constants/collections";
import {connectCollection} from "../connect";
import {addPropertyFirebaseUid} from '../utils/addPropertyFirebaseUid';

type params = { 
  collections: databases; 
  datas: any;
  docId: string
}

export async function update({collections, datas, docId}: params) {
  const formattedDatas = (await addPropertyFirebaseUid(datas));

  connectCollection(collections)
    .doc(docId)
    .update(formattedDatas)
    .catch(function(error) {
      console.error("ERROR UPDATE");
      throw error;
    });

}