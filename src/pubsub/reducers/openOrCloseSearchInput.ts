import {createSlice} from '@reduxjs/toolkit';

export const openOrCloseSearchInputSlice = createSlice({
  name: 'openOrCloseSearchInput',
  initialState: {
    open: false,
  },
  reducers: {
    openOrCloseInput(state, action: {payload: boolean; type: string}) {
      state.open = action.payload;
    },
  },
});

export const {openOrCloseInput} = openOrCloseSearchInputSlice.actions;

export default openOrCloseSearchInputSlice.reducer;
