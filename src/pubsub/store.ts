import {configureStore} from '@reduxjs/toolkit';
import onOff from './onOffSlice';

export default configureStore({
  reducer: {
    onOff,
  },
});
