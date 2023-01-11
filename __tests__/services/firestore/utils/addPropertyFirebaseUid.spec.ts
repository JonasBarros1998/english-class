import {addPropertyFirebaseUid} from '@services/firestore/utils/addPropertyFirebaseUid';
import { UserDatasOnStorageDeviceType } from "@global/interfaces/UserDatasOnStorageDevice";
import {STORAGE_USER} from '@global/constants'
import { insert } from '@services/storage/insert';
import { remove } from '@services/storage/delete';
import { User } from '@global/interfaces/User';

describe("addPropertyFirebaseUid", function() {

  const storageKey = STORAGE_USER;

  const storageValue: UserDatasOnStorageDeviceType = {
    email: 'email@email.com.br',
    id: '1234',
    idToken: '4567890',
    name: 'User app',
    photoUrl: 'http://www.photo.com.br',
    firebaseUserId: '1234567890'
  };

  beforeAll(async function() {
    await insert(storageKey, storageValue)
  });

  afterAll(async function() {
    await remove(storageKey);
  });

  test("Should return object with property firebaseUserId", async function() {

    const user: User = {
      email: 'email@email.com.br',
      id: '1234',
      idToken: '4567890',
      name: 'User app',
      photoUrl: 'http://www.photo.com.br',
    };

    const formattedDatas = (await addPropertyFirebaseUid(user));
    expect(formattedDatas).toEqual(storageValue);
  });

  test("Should return a error if storage is null", async function() {
    await remove(storageKey);
    const user: User = {
      email: 'email@email.com.br',
      id: '1234',
      idToken: '4567890',
      name: 'User app',
      photoUrl: 'http://www.photo.com.br',
    };

    await expect(addPropertyFirebaseUid(user)).rejects.toBe("Wasn't possible recovery user datas on device storage");
  });
});
