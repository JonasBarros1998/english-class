import firestore from '@react-native-firebase/firestore';
import {databases} from "./constants/collections";

const environment = process.env.NODE_ENV === 'production';

export function connectCollection(collectionName: databases) {
  if (environment) {
    return firestore().collection(`${collectionName.production}`);
  }

  return firestore().collection(`${collectionName.development}`);
}
