import {userList} from '@global/types/userList';
import {createCard} from '@global/types/cards';
import {storageGetItem} from '@storage/getItem';
import {USER_STORAGE} from '@global/constants';
import {userInfo as typeUserInfo} from '@global/types/userInfo';

/**
 * Add theese properties in user list:
 *
 * - quantity: quantity total the words
 *
 * - listTitle: user list title
 */
async function managerPropertiesInUserList(
  cards: createCard[],
  listTitle: string,
): Promise<userList[]> {
  const loadUser = await loadUserInfo();
  return [
    {
      listTitle,
      quantity: cards.length,
      cards: cards,
      user: {
        id: loadUser.id,
        userName: loadUser.name,
        photoUrl: loadUser.photoUrl,
      },
    },
  ];
}

async function loadUserInfo(): Promise<typeUserInfo> {
  const load = await storageGetItem(USER_STORAGE);
  return JSON.parse(load);
}

export {managerPropertiesInUserList};
