import React from 'react';
import {FlatList} from 'react-native';
import Card from './Card';

import {database} from './database';

function PublicList() {
  return (
    <FlatList
      data={database}
      renderItem={({item}) => <Card {...item} />}
      keyExtractor={({id}) => String(id)}
    />
  );
}

export default PublicList;
