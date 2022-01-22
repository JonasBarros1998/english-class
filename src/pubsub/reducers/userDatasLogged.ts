import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {storageGetItem, storageSetItem} from '@storage/index';
import {removeItem} from '@storage/removeItem';
import {USER_STORAGE} from '@global/constants';
import {userInfo} from '@global/types/userInfo';

type stateType = {
  userData: userInfo;
  status: string;
};

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

const updateUserDatasOnTheStorageAsync = createAsyncThunk(
  'user/updateUserDatasOnTheStorage',
  async (payload, thunkApi: any) => {
    const getUserState = thunkApi.getState();
    const userDatas = getUserState.userDatasLogged.userData as userInfo;
    await storageSetItem(USER_STORAGE, JSON.stringify(userDatas));
    return userDatas;
  },
);

const addUserDatasOnStorageAsync = createAsyncThunk(
  'user/addUserDatasOnStorage',
  async (payload: string) => {
    const userDatas = JSON.parse(payload) as userInfo;

    if (typeof userDatas.lists === 'undefined') {
      Object.defineProperty(userDatas, 'lists', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: {
          privateLists: [],
          publicLists: [],
        },
      });
    }

    if (typeof userDatas.lists.privateLists === 'undefined') {
      Object.defineProperty(userDatas.lists, 'privateLists', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: [],
      });
    }

    if (typeof userDatas.lists.publicLists === 'undefined') {
      Object.defineProperty(userDatas.lists, 'publicLists', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: [],
      });
    }
    await storageSetItem(USER_STORAGE, JSON.stringify(userDatas));
    return {userDatas};
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
      serverAuthCode: null,
      lists: {
        privateLists: [''],
        publicLists: [''],
      },
    },
    status: '',
  } as stateType,
  reducers: {
    addPrivateListId(state, {payload}) {
      const {id}: {id: string} = payload;
      state.userData.lists.privateLists.push(id);
      return state;
    },

    addPublicListId(state, {payload}) {
      const {id}: {id: string} = payload;
      state.userData.lists.publicLists.push(id);
      return state;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      getUserDatasOnStorageAsync.fulfilled,
      (state, {payload}) => {
        if (typeof payload !== 'undefined') {
          return {userData: payload.userDatas, status: 'complete'};
        }
      },
    );
    builder.addCase(
      addUserDatasOnStorageAsync.fulfilled,
      (state, {payload}) => {
        return {
          userData: payload.userDatas,
          status: 'complete',
          serverAuthCode: null,
        };
      },
    );

    builder.addCase(
      removeUserDatasOnStorageAsync.fulfilled,
      (sate, {payload}) => {
        const resetState = {
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
          serverAuthCode: null,
          lists: {
            privateLists: [''],
            publicLists: [''],
          },
        };

        return {userData: resetState, status: 'complete'};
      },
    );
    builder.addCase(
      updateUserDatasOnTheStorageAsync.fulfilled,
      (state, {payload}) => {
        return {...state, userData: payload};
      },
    );
  },
});

export {
  getUserDatasOnStorageAsync,
  removeUserDatasOnStorageAsync,
  addUserDatasOnStorageAsync,
  updateUserDatasOnTheStorageAsync,
};

export const {addPrivateListId, addPublicListId} = userDatasLogged.actions;

export default userDatasLogged.reducer;
