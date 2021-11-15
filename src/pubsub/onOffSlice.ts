import {createSlice} from '@reduxjs/toolkit';

export const onOffSlice = createSlice({
  name: 'onOffComponents',
  initialState: [{status: false, message: ''}],
  reducers: {
    onOff: (state, action) => {
      state.filter(function (item) {
        item.status = action.payload.status;
        item.message = action.payload.message;
      });
    },
  },
});

export const {onOff} = onOffSlice.actions;

export default onOffSlice.reducer;
