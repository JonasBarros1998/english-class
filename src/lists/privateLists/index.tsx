import React, {useEffect, useState} from 'react';

import {FlatList} from 'react-native';

import PrivateCards from '@components/Cards/privateCards';
import {searchPrivateLists} from './searchPrivateLists';

function PrivateList() {
  const [privateLists, setPrivateLists] = useState([]) as any[];
  useEffect(function () {
    searchPrivateLists()
      .then(function (response) {
        setPrivateLists([...response]);
      })
      .catch(function () {
        setPrivateLists([]);
      });
  }, []);
  return (
    <FlatList
      data={privateLists}
      renderItem={({item}) => <PrivateCards {...item} />}
      keyExtractor={({id}) => String(id)}
    />
  );
}

export default PrivateList;
