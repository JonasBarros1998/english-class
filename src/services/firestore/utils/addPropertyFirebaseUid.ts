import {read} from "@services/storage/read";
import {STORAGE_USER} from "@global/constants";
import { UserDatasOnStorageDeviceType } from "@global/interfaces/UserDatasOnStorageDevice";

export async function addPropertyFirebaseUid(datas: any): Promise<UserDatasOnStorageDeviceType> {
  const datasCopy = Object.assign({}, datas);
  return read<UserDatasOnStorageDeviceType>(STORAGE_USER)
    .then(function(response) {
      if (response !== null) {
        Object.defineProperty(datasCopy, 'firebaseUserId', {
          value: response.firebaseUserId,
          configurable: true,
          enumerable: true,
          writable: false
        });
        return datasCopy;
      }

      throw "Wasn't possible recovery user datas on device storage";
    })
    .catch(function() {
      throw "Wasn't possible recovery user datas on device storage";
    });

}