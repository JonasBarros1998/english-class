import {insert} from '@database/repository/insert';
import {select} from '@database/repository/search';
import {userInfo as typeUserInfo} from '@global/types/userInfo';

async function saveUserInfo(
  userUid: string,
  userInfo: typeUserInfo,
): Promise<typeUserInfo[]> {
  if (typeof userUid === 'undefined' && typeof userInfo === 'undefined') {
    throw new TypeError(`The parameters userID and userInfo 
      not should the type undefined`);
  }

  const where = `users/${userUid}`;
  const user = await existUser(where);
  if (user === false) {
    const userData = await insert([userInfo], where);
    return userData;
  }

  return [user];
}

async function existUser(where: string): Promise<typeUserInfo | false> {
  return select(where)
    .then(function (userData) {
      if (userData.toJSON() === null) {
        return false;
      }
      return userData.toJSON() as typeUserInfo;
    })
    .catch(function (error) {
      throw new Error(error);
    });
}

export {saveUserInfo};
