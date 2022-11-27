import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "@global/interfaces/User";

const user = createSlice({
  name: 'user',
  initialState: [] as User[],
  reducers: {
    removeUser: (state) => {
      state.pop();
    },
    addUser: {
      reducer: (state, action: PayloadAction<User>) => {
        state.push(action.payload);
      },
      prepare: (datas: User) => {
        return { payload: datas };
      },
    },
  },
});

export const {addUser, removeUser} = user.actions;
export default user.reducer;