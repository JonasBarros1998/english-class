import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { List } from "@global/interfaces/Card";

const readList = createSlice({
  name: 'readList',
  initialState: {
    lists: {
      current: {} as List
    },
    docId: ''
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

    docId: {
      reducer: (state, action: PayloadAction<string>) => {
        return {
          ...state,
          docId: action.payload 
        }
      },
      prepare: (data: string) => {
        return { payload: data };
      },
    }

  },
});

export const {current, docId} = readList.actions;
export default readList.reducer;