import React from 'react';
import ListDetails from '@components/ListDetails/index';

function ListDetailsScreen({route, navigation}: any) {
  return (
    <ListDetails userList={route.params.cardItem} navigation={navigation} />
  );
}

export default ListDetailsScreen;
