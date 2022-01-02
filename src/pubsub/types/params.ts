import {createCard} from '@global/types/cards';

export type param = {payload: 'createCards' | 'cards'};

export type paramAddNewCard = {
  payload: {
    type: 'createCards' | 'cards';
    cards: createCard[] | createCard;
  };
};

export type paramUpdateCards = {
  payload: {
    type: 'createCards' | 'cards';
    form: {card: createCard};
  };
};
