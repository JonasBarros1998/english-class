import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {storageGetItem} from '@storage/getItem';
import {USER_STORAGE} from '@global/constants';

const getUserDatasOnStorageAsync = createAsyncThunk(
  'user/getUserDatasOnStorage',
  async () => {
    const userDatas = await storageGetItem(USER_STORAGE);
    return {userDatas};
  },
);

export const userDatasLogged = createSlice({
  name: 'toLoadUserDatas',
  initialState: {
    userData: {},
    status: 'pending',
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUserDatasOnStorageAsync.fulfilled, (state, payload) => {
      return {userData: payload.payload.userDatas, status: 'complete'};
    });
  },
});

export {getUserDatasOnStorageAsync};

export default userDatasLogged.reducer;
