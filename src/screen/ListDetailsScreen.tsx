import React from 'react';
import RenderCards from '@components/Cards/CardDetails';

function ListDetailsScreen({navigation, route}: any) {
  return <RenderCards cardItem={route.params.cardItem} />;
}

export default ListDetailsScreen;
