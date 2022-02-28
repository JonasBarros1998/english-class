import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {selectToJson} from '@services/database/repository/search';
import {insert} from '@services/database/repository/insert';
import {userInfo as typeUserInfo} from '@global/types/userInfo';

type typeInitialState = {
  privateLists: any[];
  publicLists: any[];
};

const getPrivateListsAsync = createAsyncThunk(
  'lists/privateLists',
  async (payload: typeUserInfo, thunkApi) => {
    const privateLists = await selectToJson(`privateList/${payload.uid}`);
    return privateLists;
  },
);

const addNewPrivateListAsync = createAsyncThunk(
  'lists/addNewPrivateList',
  async (payload: any) => {
    await insert(payload.datas, payload.where);
  },
);

export const lists = createSlice({
  name: 'lists',
  initialState: {
    privateLists: [],
    publicLists: [],
  } as typeInitialState,
  reducers: {
    publicLists: (state, action: any) => {
      state.publicLists.push(...action.payload);
    },

    privateLists: (state, action: any) => {
      state.privateLists.push(...action.payload);
    },
  },

  extraReducers: builder => {
    builder.addCase(getPrivateListsAsync.fulfilled, (state, {payload}) => {
      if (payload.length === 0) {
        return {...state, privateLists: []};
      }
      return {...state, privateLists: payload};
    });
  },
});

export const {publicLists, privateLists} = lists.actions;

export {getPrivateListsAsync, addNewPrivateListAsync};

export default lists.reducer;
