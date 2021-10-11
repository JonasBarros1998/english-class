import React, {useEffect, useState} from 'react';

import {FlatList, Pressable} from 'react-native';

import PrivateCards from '@components/Cards/privateCards';
import {searchPrivateLists} from './searchPrivateLists';

function PrivateList({navigation}: any) {
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
      renderItem={({item}) => {
        return (
          <Pressable
            onPress={() => {
              navigation.navigate('listDetails', {screen: 'listDetails'});
            }}>
            <PrivateCards {...item} />
          </Pressable>
        );
      }}
      keyExtractor={({id}) => String(id)}
    />
  );
}

export default PrivateList;
