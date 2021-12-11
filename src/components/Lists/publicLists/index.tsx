import React from 'react';
import {FlatList} from 'react-native';
import Card from '../../Cards';
import {database} from './database';
import {useStore} from 'react-redux';

function PublicList() {
  const store = useStore();
  console.log(store.getState());

  return (
    <FlatList
      data={database}
      renderItem={({item}) => <Card {...item} />}
      keyExtractor={({id}) => String(id)}
    />
  );
}

export default PublicList;
