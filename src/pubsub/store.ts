import {configureStore} from '@reduxjs/toolkit';
import onOff from './onOffSlice';
import theUserHaveAccess from './reducers/accessUserSlice';
import userListOffline from './reducers/userListOffline';
import listOfCards from './reducers/listOfCards';
import lists from './lists';
import userDatasLogged from './reducers/userDatasLogged';
import openOrCloseSearchInput from './reducers/openOrCloseSearchInput';

export default configureStore({
  reducer: {
    lists,
    onOff,
    theUserHaveAccess,
    userListOffline,
    listOfCards,
    userDatasLogged,
    openOrCloseSearchInput,
  },
});
