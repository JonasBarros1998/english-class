import {createSlice} from '@reduxjs/toolkit';

export const userListSlice = createSlice({
  name: 'onOffComponents',
  initialState: [],
  reducers: {
    userList: (state, action) => {
      console.log('action >>> ', action.payload);
    },
  },
});

export const {userList} = userListSlice.actions;

export default userListSlice.reducer;
