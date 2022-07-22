import {configureStore} from '@reduxjs/toolkit';
import user from './slices/user';
import list from './slices/list';

export default configureStore({
  reducer: {
    user,
    list
  },
});
