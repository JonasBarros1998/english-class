import {connectCollection} from "../connect";
import {databases} from "../constants/collections";

export async function insert({ collections, datas }: { collections: databases; datas: any; }) {
  connectCollection(collections)
    .add(datas).catch(function(error) {
        console.log("ERROR INSERT");
        throw error;
      });
}
