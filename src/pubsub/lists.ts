import {createSlice} from '@reduxjs/toolkit';

export const lists = createSlice({
  name: 'lists',
  initialState: [],
  reducers: {
    publicLists: (state: any, action: any) => {
      state.push(...action.payload);
    },

    privateLists: () => {},
  },
});

export const {publicLists} = lists.actions;

export default lists.reducer;
