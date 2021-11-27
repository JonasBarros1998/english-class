import {createSlice} from '@reduxjs/toolkit';

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    userId: null,
    name: '',
    uid: null,
  },
  reducers: {
    userInfo: (state, action) => {
      state.name = action.payload.name;
      state.userId = action.payload.id;
      state.uid = action.payload.uid;
    },
  },
});

export const {userInfo} = userInfoSlice.actions;

export default userInfoSlice.reducer;
