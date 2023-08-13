import {login} from "@services/googleSignin/signin";
import {STORAGE_USER} from "@global/constants";
import {addUser} from "@state/redux/slices/user";
import store from "@state/redux/store";
import { toAutenticateFirebase } from "./authFirebase";
import { User } from "@global/interfaces/User";
import { insert as insertFirestore } from "@services/firestore/actions/insert";
import { collections } from "@services/firestore/constants/collections";
import { insert } from "@services/storage/insert";
import { read } from "@services/storage/read";
import { searchUserInDatabase } from "./searchUserInDatabase";
import { UserDatasOnStorageDeviceType } from "@global/interfaces/UserDatasOnStorageDevice";
import { captureErrorException } from "@services/errorTracking/exception/captureErrorException";

export async function userLogin(): Promise<void> {
  const datas = (
    await login()
      .then(async function(response: any) {
        const [date] = new Date().toISOString().split("T");

        const {
          user: {email, name, photo, id},
          idToken
        } = response;

        const datas = {
          email: email as string,
          name: name as string,
          photoUrl: photo as string,
          idToken: idToken as string,
          id: id as string,
          date
        };
        return datas;
      })
      .catch(function(error: Error) {
        captureErrorException(new Error(error.message));
        throw error.message;
      })
  );
  
  toAutenticateFirebase(datas.idToken)
    .then(async function(datasOfFirebase) {
      await insertDatasOnStorage(datas, datasOfFirebase.uid)
      checkIfUserDataExistOnDatabase(datas);
    });

  store.dispatch(addUser(datas));
  
}

export async function userIsLogged(): Promise<boolean> {
  return read<User>(STORAGE_USER)
    .then(function(user) {
      if(user !== null) {
        store.dispatch(addUser(user));
        return true;
      }
      return false;
    })
    .catch(function(error) {
      captureErrorException(new Error(`wasn't possible read user data in storage`));
      throw error.message;
    });
}

async function checkIfUserDataExistOnDatabase(datas: User) {
  const existUserInDatabase = await searchUserInDatabase(datas.id);

  if (existUserInDatabase === false) {
    insertFirestore({
      collections: collections.users,
      datas: {
        email: datas.email,
        id: datas.id,
        date: datas.date,
      }
    });
  }

}

async function insertDatasOnStorage(datas: User, firebaseUid: string) {
  const userDatasCopy = Object.assign({}, datas) as UserDatasOnStorageDeviceType;
  
  Object.defineProperty(userDatasCopy, 'firebaseUserId', {
    value: firebaseUid,
    enumerable: true,
    configurable: true,
    writable: true
  });

  insert(STORAGE_USER, userDatasCopy);
}
