import {createSlice} from '@reduxjs/toolkit';

export const listOfCards = createSlice({
  name: 'listOfCards',
  initialState: [],
  reducers: {
    clearAllListData: (state: any, action: any) => {
      if (state.length === 0) {
        return;
      }
      state.splice(0, state.length);
    },
    updateTextOfCard: (state: any, action: any) => {},
    deleteOneCard: (state: any, action: any) => {},
    addNewCard: (state: any, action: any) => {
      console.log('>>> payload', action.payload);
      state.push(action.payload);
    },
    updateAllCards: (state: any, action: any) => {
      if (state.length === 0) {
        state.push(...action.payload);
        return;
      }
      state.splice(0, state.length);
      state.push(...action.payload);
    },
  },
});

export const {
  clearAllListData,
  updateTextOfCard,
  deleteOneCard,
  addNewCard,
  updateAllCards,
} = listOfCards.actions;

export default listOfCards.reducer;
