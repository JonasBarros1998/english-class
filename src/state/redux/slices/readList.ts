import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { List } from "@global/interfaces/Card";

const readList = createSlice({
  name: 'readList',
  initialState: {
    lists: {
      current: {} as List
    }
  },
  reducers: {
    current: {
      reducer: (state, action: PayloadAction<List>) => {
        return {
          ...state,
          lists: {
            current: action.payload
          }
        }
      },
      prepare: (datas: List) => {
        return { payload: datas };
      },
    },

  },
});

export const {current} = readList.actions;
export default readList.reducer;