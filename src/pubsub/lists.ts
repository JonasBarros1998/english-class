import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  selectToJson,
  selectChildrenToJson,
} from '@services/database/repository/search';
import {insert} from '@services/database/repository/insert';
import {userInfo as typeUserInfo} from '@global/types/userInfo';

type typeInitialState = {
  privateLists: any[];
  publicLists: any[];
  publicEnglishListAll: any[];
  searchPublicEnglishList: any[];
  publicListOfUserLogged: any[];
};

const getPrivateListsAsync = createAsyncThunk(
  'lists/privateLists',
  async (payload: typeUserInfo, thunkApi) => {
    return await selectChildrenToJson(`privateList/${payload.uid}`);
  },
);

const addNewPrivateListAsync = createAsyncThunk(
  'lists/addNewPrivateList',
  async (payload: any) => {
    await insert(payload.datas, payload.where);
  },
);

const getPublicListOfUserLoggedAsync = createAsyncThunk(
  'lists/publicListUserLogged',
  async (payload: string[]) => {
    return await Promise.all(
      payload.map(
        async publicListId => await selectToJson(`publicList/${publicListId}`),
      ),
    );
  },
);

export const lists = createSlice({
  name: 'lists',
  initialState: {
    privateLists: [],
    publicLists: [],
    publicEnglishListAll: [],
    searchPublicEnglishList: [],
    publicListOfUserLogged: [],
  } as typeInitialState,
  reducers: {
    publicLists: (state, action: any) => {
      state.publicLists.push(...action.payload);
      state.searchPublicEnglishList.push(...action.payload);
    },
    updateAllEnglishPublicList: (state, action: any) => {
      state.publicEnglishListAll = action.payload;
      state.searchPublicEnglishList = action.payload;
    },
    updateOnePublicList: (state, action: any) => {
      state.publicLists.filter(function (item, index) {
        if (item.id === action.payload.id) {
          state.publicLists[index] = action.payload;
        }
      });

      state.publicListOfUserLogged.filter(function (item, index) {
        if (item.id === action.payload.id) {
          state.publicListOfUserLogged[index] = action.payload;
        }
      });
    },
    searchOnList: (state, action: any) => {
      state.searchPublicEnglishList = action.payload;
    },
    privateLists: (state, action: any) => {
      state.privateLists.push(...action.payload);
    },
    addNewPublicListOfUserLogged: (state, action: any) => {
      state.publicListOfUserLogged.push(...action.payload);
    },
  },

  extraReducers: builder => {
    builder.addCase(getPrivateListsAsync.fulfilled, (state, {payload}) => {
      if (payload.length === 0) {
        return {...state, privateLists: []};
      }
      return {...state, privateLists: payload};
    });

    builder.addCase(
      getPublicListOfUserLoggedAsync.fulfilled,
      (state, {payload}) => {
        return {...state, publicListOfUserLogged: payload};
      },
    );
  },
});

export const {
  publicLists,
  privateLists,
  updateAllEnglishPublicList,
  searchOnList,
  addNewPublicListOfUserLogged,
  updateOnePublicList,
} = lists.actions;

export {
  getPrivateListsAsync,
  addNewPrivateListAsync,
  getPublicListOfUserLoggedAsync,
};

export default lists.reducer;
