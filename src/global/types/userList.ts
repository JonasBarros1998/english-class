import {createCard} from './cards';

export type userList = {
  id?: string;
  cards: createCard[];
  listTitle: string;
  quantity: number;
};
