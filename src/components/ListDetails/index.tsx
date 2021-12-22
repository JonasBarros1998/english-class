import React from 'react';
import {userList as typeUserList} from '@global/types/userList';
import CreateCards from '@components/Cards/AnimatedCards/createCards';
import {updateCardList} from '@components/Cards/useCase/cards';

function ListDetails(userList: typeUserList) {
  updateCardList(userList.cards);

  return <CreateCards {...userList} />;
}

export default ListDetails;
