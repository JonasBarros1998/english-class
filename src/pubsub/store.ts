import {configureStore} from '@reduxjs/toolkit';
import onOff from './onOffSlice';
import userInfo from './userInfoSlice';

export default configureStore({
  reducer: {
    onOff,
    userInfo,
  },
});
