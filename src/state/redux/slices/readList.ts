import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { List } from "@global/interfaces/Card";

const readList = createSlice({
  name: 'readList',
  initialState: {
    allLists: [] as List[],
    lists: {
      current: {} as List,
    },
    docId: ''
  },
  reducers: {
    current: {
      reducer: (state, action: PayloadAction<List>) => {
        return {
          ...state,
          lists: {
            current: action.payload,
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
    },

    allLists: {
      reducer: (state, action: PayloadAction<List[]>) => {
        state.allLists.splice(0, state.allLists.length);
        state.allLists.push(...action.payload);
      },

      prepare: (datas: List[]) => {
        return { payload: datas };
      }
    }

  },
});

export const {current, docId, allLists} = readList.actions;
export default readList.reducer;