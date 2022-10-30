import {configureStore} from '@reduxjs/toolkit';
import user from './slices/user';
import list from './slices/list';
import readList from './slices/readList';

export default configureStore({
  reducer: {
    user,
    list,
    readList
  },
});
