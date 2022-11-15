import { List } from '@global/interfaces/Card';
import { User } from '@global/interfaces/User';
import state from '@state/redux/store';


export function getUserDataOnStore(): User[] {
  return state.getState().user
}

//Check if the user can edit this list
export function checkUserPermission(list: List): boolean {
  const [userData] = getUserDataOnStore();

  if (list.userId === userData.id) {
    return true;
  }

  return false;

}

