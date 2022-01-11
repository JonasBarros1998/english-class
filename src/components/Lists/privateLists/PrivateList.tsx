import React, {useEffect, useState} from 'react';

import {FlatList, Pressable} from 'react-native';

import PrivateCards from '@components/Cards/PrivateCard';
import {loadPrivateList} from './useCase/loadPrivateList';
import {useDispatch} from 'react-redux';

function PrivateList({navigation}: any) {
  const [privateLists, setPrivateLists] = useState([]) as any[];
  const dispatch = useDispatch();
  useEffect(
    function () {
      loadPrivateList({
        dispatch,
      })
        .then(function (response) {
          setPrivateLists([...response]);
        })
        .catch(function () {
          setPrivateLists([]);
        });
    },
    [dispatch],
  );
  return (
    <FlatList
      data={privateLists}
      renderItem={({item}) => {
        return (
          <Pressable
            onPress={() => {
              navigation.navigate('listDetails', {
                screen: 'listDetails',
                params: {listIsPublic: true},
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
