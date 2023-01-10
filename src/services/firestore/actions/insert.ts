import {connectCollection} from "../connect";
import {databases} from "../constants/collections";
import {addPropertyFirebaseUid} from '../utils/addPropertyFirebaseUid';

export async function insert({ collections, datas }: { collections: databases; datas: any;}) {
  const formattedDatas = (await addPropertyFirebaseUid(datas));
  
  connectCollection(collections)
    .add(formattedDatas).catch(function(error) {
      console.log("ERROR INSERT");
      throw error;
    });
}
