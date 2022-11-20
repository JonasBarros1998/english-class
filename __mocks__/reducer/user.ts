import store from '@state/redux/store';
import {addUser} from '@state/redux/slices/user';

export const userInitialState = {
  email: 'test.1234@test.com.br',
  name: 'test',
  photoUrl: 'www.teste.com/perfile.png',
  idToken: '123456',
  id: '123'
};

export const dispatchUser = () => {
  store.dispatch(addUser(userInitialState));
}
