import {configureStore} from '@reduxjs/toolkit';
import user from './slices/user';
import readList from './slices/readList';
import flashcards from './slices/flashcards';

export default configureStore({
  reducer: {
    user,
    readList,
    flashcards
  },
});
