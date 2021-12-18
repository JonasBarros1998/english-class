import React from 'react';
import {FlatList} from 'react-native';
import {userList as typeUserList} from '@global/types/userList';
import CreateCards from '@components/Cards/createCards';

function ListDetails(userList: typeUserList) {
  return (
    <FlatList
      data={userList.cards}
      renderItem={({item}) => <CreateCards {...item} />}
    />
  );
}

export default ListDetails;
