import {createSlice} from '@reduxjs/toolkit';

export const loggedUserSlice = createSlice({
  name: 'loggedUser',
  initialState: {
    status: false,
  },
  reducers: {
    loggedUser: (state, action) => {
      state.status = action.payload.status;
    },
  },
});

export const {loggedUser} = loggedUserSlice.actions;

export default loggedUserSlice.reducer;
