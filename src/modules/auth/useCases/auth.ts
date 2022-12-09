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

export async function userLogin(routes: any): Promise<void> {

    const datas = (
      await login()
        .then(async function(response: any) {
          const {
            user: {email, name, photo, id},
            idToken
          } = response;
  
          const datas: User = {
            email: email as string,
            name: name as string,
            photoUrl: photo as string,
            idToken: idToken as string,
            id: id as string
          };
          return datas;
        })
        .catch(function(error) {
          console.error("ERROR USER_LOGIN");
          throw error;
        })
    );
    
    await(toAutenticateFirebase(datas.idToken));

    const existUserInDatabase = (await searchUserInDatabase(datas.id));
  
    if (existUserInDatabase === false) {
      await insertFirestore({
        collections: collections.users,
        datas: {
          email: datas.email,
          id: datas.id
        }
      });
    }
  
    await insert(STORAGE_USER, datas);
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
      throw error;
    });
}
