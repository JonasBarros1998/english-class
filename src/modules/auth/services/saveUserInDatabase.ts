import {insert} from '@services/database/repository/insert';
import {select} from '@services/database/repository/search';
import {userInfo} from '@global/types/userInfo';

async function saveUserInDatabase(user: userInfo): Promise<any[]> {
  if (typeof user === 'undefined') {
    throw new TypeError('These parameters should be of userInfoType');
  }
  return await insert([user], `users/${user.uid}`);
}

async function checkIfUserExistInDatabase(
  uid: string,
): Promise<userInfo[] | false> {
  const loaduserDataOnFirebase: userInfo[] = [];

  return select(`users/${uid}`)
    .then(function (userData) {
      if (userData.toJSON() === null) {
        return false;
      }
      userData.forEach(function (item) {
        loaduserDataOnFirebase.push(item.toJSON() as userInfo);
      });
      return loaduserDataOnFirebase;
    })
    .catch(function (error) {
      throw new Error(error.message);
    });
}

export {checkIfUserExistInDatabase, saveUserInDatabase};
