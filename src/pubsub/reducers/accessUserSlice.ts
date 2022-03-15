import {createSlice} from '@reduxjs/toolkit';

export const accessUserSlice = createSlice({
  name: 'theUserHaveAccess',
  initialState: {
    status: false,
  },
  reducers: {
    theUserHaveAccess: (state, action: {payload: boolean; type: string}) => {
      state.status = action.payload;
    },
  },
});

export const {theUserHaveAccess} = accessUserSlice.actions;

export default accessUserSlice.reducer;
