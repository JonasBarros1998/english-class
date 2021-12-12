import {createSlice} from '@reduxjs/toolkit';
import {userList} from '@global/types/userList';

export const lists = createSlice({
  name: 'lists',
  initialState: [],
  reducers: {
    publicLists: (state: any, action: any) => {
      state.push(action.payload);
      // console.log('action >>>', action.payload);
      // console.log('state >>> ', state);
    },

    privateLists: () => {},
  },
});

export const {publicLists} = lists.actions;

export default lists.reducer;
