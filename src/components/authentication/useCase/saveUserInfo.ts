import {insert} from '@database/index';

type userInfo = {
  scopes?: string[];
  serverAuthCode: null | string;
  idToken: string | null;
  user: {
    photo: string | null;
    email: string;
    familyName: string | null;
    givenName: string | null;
    name: string | null;
    id: number | null | string;
  };
};

async function saveUserInfo(userId: string, userInfo: userInfo) {
  if (typeof userId === 'undefined' && typeof userInfo === 'undefined') {
    throw new TypeError(`The parameters userID and userInfo 
      not should the type undefined`);
  }
  const url = `users/${userId}`;
  await insert([userInfo], url);
}

export {saveUserInfo};
