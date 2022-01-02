import {createCard} from '@global/types/cards';
import {createSlice} from '@reduxjs/toolkit';

type param = {payload: 'createCards' | 'cards'};

type paramAddNewCard = {
  payload: {
    type: 'createCards' | 'cards';
    cards: createCard[] | createCard;
  };
};

export const listOfCards = createSlice({
  name: 'listOfCards',
  initialState: {cards: [], createCards: []},
  reducers: {
    clearAllListCards: (state: any, action: param) => {
      if (action.payload === 'createCards') {
        return {...state, createCards: []};
      }
      return {...state, cards: []};
    },
    updateTextOfCard: (state: any, action: any) => {},
    deleteOneCard: (state: any, action: any) => {},
    addNewCard: (state: any, action: paramAddNewCard) => {
      if (action.payload.type === 'createCards') {
        state.createCards.push(action.payload.cards);
      }
      state.cards.push(action.payload.cards);
    },
    updateAllCards: (state: any, action: paramAddNewCard) => {
      if (action.payload.type === 'createCards') {
        return {...state, createCards: []};
      }

      return {...state, cards: action.payload.cards};
    },
  },
});

export const {
  clearAllListCards,
  updateTextOfCard,
  deleteOneCard,
  addNewCard,
  updateAllCards,
} = listOfCards.actions;

export const selectTodos = (cards: any) => cards.listOfCards;

export default listOfCards.reducer;
