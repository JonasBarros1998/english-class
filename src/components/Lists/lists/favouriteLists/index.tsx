import React from 'react';

import {FlatList} from 'react-native';

import {database} from './database';
import Card from '../../../Cards';

function FavouriteList() {
  return (
    <FlatList
      data={database}
      renderItem={({item}) => <Card {...item} />}
      keyExtractor={({id}) => String(id)}
    />
  );
}

export default FavouriteList;
