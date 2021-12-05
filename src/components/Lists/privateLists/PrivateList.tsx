import React, {useEffect, useState} from 'react';

import {FlatList, Pressable} from 'react-native';

import PrivateCards from '@components/Cards/PrivateCard';
import {loadPrivateList} from './useCase/loadPrivateList';

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
      keyExtractor={({id}, key) => String(key)}
    />
  );
}

export default PrivateList;
