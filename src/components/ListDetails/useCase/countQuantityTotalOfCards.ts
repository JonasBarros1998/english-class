import {userList as typeUserList} from '@global/types/userList';

function countTotalOfCards(list: typeUserList) {
  list.quantity = list.cards.length;
  return list;
}

export {countTotalOfCards};
