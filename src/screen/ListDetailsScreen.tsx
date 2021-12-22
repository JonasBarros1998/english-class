import React from 'react';
import ListDetails from '@components/ListDetails/index';

function ListDetailsScreen({route, navigation}: any) {
  // console.log('>>> ', route.params.cardItem);
  // console.log('>>> ', navigation);

  return <ListDetails {...route.params.cardItem} />;
}

export default ListDetailsScreen;
