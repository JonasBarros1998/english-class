import React, {useEffect, useState} from 'react';

import {FlatList, Pressable} from 'react-native';

import PrivateCards from '@components/Cards/privateCards';
import {loadPrivateList} from './loadPrivateList';

function PrivateList({navigation}: any) {
  const [privateLists, setPrivateLists] = useState([]) as any[];
  useEffect(function () {
    loadPrivateList()
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
        console.log(item);
        return (
          <Pressable
            onPress={() => {
              navigation.navigate('listDetails', {
                screen: 'listDetails',
                cardItem: item,
              });
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
