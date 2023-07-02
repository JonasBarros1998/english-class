import { List } from "./Card";
import { User } from "./User";

export interface FlashCard {
  id: string,
  date: string,
  lists: {
    id: string,
    title: string,
    quantity: number
  }
}

export interface FlashCardDatabase {
  datas: {
    id: string,
    userId: string,
    lists: {
      id: string,
      title: string,
      quantity: number
    }
    date: string,
  },
  documentId: string;
  
}

export interface ResultFlashCard {
  error: number, 
  correct: number
}
