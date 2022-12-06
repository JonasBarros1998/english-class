import {filterById} from '@services/firestore/actions/filter';
import {collections} from "@services/firestore/constants/collections";
import {User} from '@global/interfaces/User';

export async function searchUserInDatabase(userId: string): Promise<boolean> {
  return filterById<User>(collections.users, userId)
    .then(function(response) {
      if (response.length === 0) {
        return false;
      } 
      return true;
    })
    .catch(function() {
      return false;
    })
}