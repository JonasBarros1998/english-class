import {configureStore} from '@reduxjs/toolkit';
import onOff from './onOffSlice';
import loggedUser from './loggedUser';
import userListOffline from './reducers/userListOffline';
import listOfCards from './reducers/listOfCards';
import cards from './reducers/cards';

export default configureStore({
  reducer: {
    onOff,
    loggedUser,
    userListOffline,
    listOfCards,
    cards,
  },
});
