import {userList} from '@global/types/userList';
import {createCard} from '@global/types/cards';
import {userInfo as typeUserInfo} from '@global/types/userInfo';

/**
 * Add theese properties in user list:
 *
 * - quantity: quantity total the words
 *
 * - listTitle: user list title
 *
 * - userDatas: datas of logged user
 */
async function managerPropertiesInUserList(
  cards: createCard[],
  listTitle: string,
  userDatas: typeUserInfo,
): Promise<userList[]> {
  return [
    {
      listTitle,
      quantity: cards.length,
      cards: cards,
      user: {
        id: userDatas.user.id as string,
        userName: userDatas.user.name as string,
        photoUrl: userDatas.user.photo as string,
      },
    },
  ];
}

export {managerPropertiesInUserList};
