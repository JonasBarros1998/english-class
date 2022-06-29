import {User} from '@react-native-google-signin/google-signin';
import {login} from '@services/googleSignin/signin';
import {insert} from '@services/storage/insert';
import {navigateToHome} from '../routes/routes';
import {STORAGE_USER} from '@global/constants';
import {addUser} from "@state/redux/slices/user";
import store from "@state/redux/store";

export async function userLogin(route: any): Promise<void> {
  const userInfo = (await login()) as User;
  const {
    user: {email, name, photo},
  } = userInfo;

  const datas = {
    email: email as string,
    name: name as string,
    photoUrl: photo as string,
  };

  await insert(STORAGE_USER, datas);
  
  store.dispatch(addUser(datas))

  navigateToHome(route);
}
