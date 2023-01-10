import {User} from '@global/interfaces/User';

interface UserDatasOnStorageDevice {
  firebaseUserId: string
}

export type UserDatasOnStorageDeviceType = UserDatasOnStorageDevice & User;
