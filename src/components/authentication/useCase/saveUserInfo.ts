import {insert} from '@database/repository/insert';
import {select} from '@database/repository/search';
import {userInfo as typeUserInfo} from '@global/types/userInfo';

async function saveUserInfo(userUid: string, userInfo: typeUserInfo) {
  if (typeof userUid === 'undefined' && typeof userInfo === 'undefined') {
    throw new TypeError(`The parameters userID and userInfo 
      not should the type undefined`);
  }

  const where = `users/${userUid}`;
  const userData = await existUser(where);
  if (userData === false) {
    insert([userInfo], where);
    return userData;
  }
}

async function existUser(where: string) {
  return select(where)
    .then(function (userData) {
      if (userData.toJSON() === null) {
        return false;
      }
      return true;
    })
    .catch(function (error) {
      throw new Error(error);
    });
}

export {saveUserInfo};
