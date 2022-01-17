import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {storageGetItem, storageSetItem} from '@storage/index';
import {removeItem} from '@storage/removeItem';
import {USER_STORAGE} from '@global/constants';

const getUserDatasOnStorageAsync = createAsyncThunk(
  'user/getUserDatasOnStorage',
  async () => {
    const userDatas = await storageGetItem(USER_STORAGE);
    if (userDatas !== null) {
      return {userDatas};
    }
  },
);

const removeUserDatasOnStorageAsync = createAsyncThunk(
  'user/removeUserDatasOnStorage',
  async () => {
    await removeItem(USER_STORAGE);
  },
);

const addUserDatasOnStorageAsync = createAsyncThunk(
  'user/addUserDatasOnStorage',
  async (payload: string) => {
    await storageSetItem(USER_STORAGE, payload);
    return {userDatas: JSON.parse(payload)};
  },
);

export const userDatasLogged = createSlice({
  name: 'toLoadUserDatas',
  initialState: {
    userData: {
      user: {
        email: null,
        familyName: null,
        givenName: null,
        id: null,
        name: null,
        photo: null,
      },
      id: null,
      scopes: [],
      idToken: null,
      uid: null,
      lists: {
        publicLists: [],
        privateLists: [],
      },
    },
    status: 'pending',
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUserDatasOnStorageAsync.fulfilled, (state, payload) => {
      if (typeof payload.payload !== 'undefined') {
        return {userData: payload.payload.userDatas, status: 'complete'};
      }
    });

    builder.addCase(
      removeUserDatasOnStorageAsync.fulfilled,
      (state, payload) => {
        const datas = {
          user: {
            email: null,
            familyName: null,
            givenName: null,
            id: null,
            name: null,
            photo: null,
          },
          id: null,
          scopes: [],
          idToken: null,
          uid: null,
          lists: {
            publicLists: [],
            privateLists: [],
          },
        };
        return {userData: datas, status: 'complete'};
      },
    );
    builder.addCase(addUserDatasOnStorageAsync.fulfilled, (state, payload) => {
      return {userData: payload.payload.userDatas, status: 'complete'};
    });
  },
});

export {
  getUserDatasOnStorageAsync,
  removeUserDatasOnStorageAsync,
  addUserDatasOnStorageAsync,
};

export default userDatasLogged.reducer;
