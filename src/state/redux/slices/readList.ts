import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Card } from "@global/interfaces/Card";

const readList = createSlice({
  name: 'readList',
  initialState: {
    readAll: [],
    readOne: {}
  },
  reducers: {
    readAll: {
      reducer: (state, action: PayloadAction<Card>) => {
        console.log(action);
      },
      prepare: (datas: Card) => {
        return { payload: datas };
      },
    },
    readOne: {
      reducer: (state, action: PayloadAction<Card>) => {
        console.log(action);
      },
      prepare: (datas: Card) => {
        return { payload: datas };
      },
    },

  },
});

export const {readAll, readOne} = readList.actions;
export default readList.reducer;