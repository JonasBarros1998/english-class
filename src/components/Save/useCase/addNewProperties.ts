import {userList} from '@global/types/userList';
import {createCard} from '@global/types/cards';

/**
 * Add theese properties in user list:
 *
 * - quantity: quantity total the words
 *
 * - listTitle: user list title
 */
function managerPropertiesInUserList(
  cards: createCard[],
  listTitle: string,
): userList[] {
  return [
    {
      listTitle,
      quantity: cards.length,
      cards: cards,
    },
  ];
}

export {managerPropertiesInUserList};
