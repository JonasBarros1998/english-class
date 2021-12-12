import {configureStore} from '@reduxjs/toolkit';
import onOff from './onOffSlice';
import loggedUser from './loggedUser';
import userListOffline from './reducers/userListOffline';
import lists from './lists';

export default configureStore({
  reducer: {
    onOff,
    loggedUser,
    userListOffline,
    lists,
  },
});
