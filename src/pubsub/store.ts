import {configureStore} from '@reduxjs/toolkit';
import onOff from './onOffSlice';
import userInfo from './userInfoSlice';
import userListOffline from './reducers/userListOffline';

export default configureStore({
  reducer: {
    onOff,
    userInfo,
    userListOffline,
  },
});
