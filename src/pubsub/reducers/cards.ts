import {createSlice} from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: [],
  reducers: {
    addCardEmpty: (state: any, action: any) => {
      state.push(action.payload);
    },

    deleteCard: (state, action) => {
      throw 'METHOD NOT IMPLEMENTED';
    },

    updateCards: (state, action) => {
      throw 'METHOD NOT IMPLEMENTED';
    },
  },
});

export const {addCardEmpty} = cardsSlice.actions;

export default cardsSlice.reducer;
