import {createCard} from '@global/types/cards';
import {createSlice} from '@reduxjs/toolkit';
import {param, paramAddNewCard, paramUpdateTextCard} from '../types/params';

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
    updateTextOfCard: (state: any, action: paramUpdateTextCard) => {
      const {form, type} = action.payload;
      if (type === 'createCards') {
        form.card[form.inputType] = action.payload.form.input;
        state.createCards.filter((item: createCard, index: number) => {
          if (item.id === form.card.id) {
            state.createCards[index] = item;
          }
        });
        return;
      }

      state.cards.filter((item: createCard, index: number) => {
        if (item.id === form.card.id) {
          state.cards[index] = form.card;
        }
      });
    },
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
