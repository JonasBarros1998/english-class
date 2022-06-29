import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "@global/interfaces/User";

const user = createSlice({
  name: 'user',
  initialState: [] as User[],
  reducers: {
    addUser: {
      reducer: (state, action: PayloadAction<User>) => {
        state.push(action.payload);
      },
      prepare: (datas: User) => {
        return { payload: datas };
      },
    },
    getUser: {
      reducer: (state, action: PayloadAction<User>) => {},
      prepare: (datas: User) => {},
    },
    removeUser: {
      reducer: (state, action: PayloadAction<User>) => {},
      prepare: (datas: User) => {},
    }
  },
});

export const {addUser, removeUser} = user.actions;
export default user.reducer;