import { List } from "./Card";
import { User } from "./User";

export interface FlashCard {
  id: string,
  date: string,
  lists: string
}

export interface FlashCardDatabase {
  datas: {
    id: string,
    userId: string,
    lists: string
    date: string,
  },
  documentId: string;
  
}

export interface ResultFlashCard {
  error: number, 
  correct: number
}
