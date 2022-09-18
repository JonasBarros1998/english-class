import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Card } from "@global/interfaces/Card";

const list = createSlice({
  name: 'cards',
  initialState: {
    read: [],
    create: {},
    readOne: {}
  },
  reducers: {
    addCardInList: {
      reducer: (state, action: PayloadAction<Card>) => {
        console.log(action);
      },
      prepare: (datas: Card) => {
        return { payload: datas };
      },
    },
    updateCardInList: {
      reducer: (state, action: PayloadAction<Card>) => {
        console.log(action);
      },
      prepare: (datas: Card) => {
        return { payload: datas };
      },
    },

  },
});

export const {addCardInList} = list.actions;
export default list.reducer;