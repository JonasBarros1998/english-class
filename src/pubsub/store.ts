import {configureStore} from '@reduxjs/toolkit';
import onOff from './onOffSlice';
import loggedUser from './loggedUser';
import userListOffline from './reducers/userListOffline';
import listOfCards from './reducers/listOfCards';
import lists from './lists';

export default configureStore({
  reducer: {
    lists,
    onOff,
    loggedUser,
    userListOffline,
    listOfCards,
  },
});
