import {createCard, inputName} from '@global/types/cards';

export type param = {payload: 'createCards' | 'cards'};

export type paramAddNewCard = {
  payload: {
    type: 'createCards' | 'cards';
    cards: createCard[] | createCard;
  };
};

export type paramUpdateTextCard = {
  payload: {
    type: 'createCards' | 'cards';
    form: {input: string; card: createCard; inputType: inputName};
  };
};
