import React from 'react';

import {FlatList} from 'react-native';

import PrivateCards from '../../components/Cards/privateCards';
import {database} from './database';

function PrivateList() {
  return (
    <FlatList
      data={database}
      renderItem={({item}) => <PrivateCards {...item} />}
      keyExtractor={({id}) => String(id)}
    />
  );
}

export default PrivateList;
