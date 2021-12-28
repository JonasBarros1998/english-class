import React from 'react';
import ListDetails from '@components/ListDetails/index';

function ListDetailsScreen({route, navigation}: any) {
  return <ListDetails {...route.params.cardItem} />;
}

export default ListDetailsScreen;
