import {createSlice} from '@reduxjs/toolkit';
import {userList} from '@global/types/userList';

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
