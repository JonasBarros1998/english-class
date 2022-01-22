import React, {useEffect, useState} from 'react';
import {Text, Center} from 'native-base';
import {useDispatch} from 'react-redux';
import {Pressable} from 'react-native';
import PrivateCard from '@components/Cards/PrivateCard';
import {userList} from '@global/types/userList';
import {loadPrivateList} from './useCase/loadPrivateList';

function LoadOneCardPrivateList(props: {navigation: any}) {
  const [itemUserList, setItemsUserList] = useState<userList>();
  const dispatch = useDispatch();

  useEffect(
    function () {
      loadPrivateList({}).then(function (datas) {
        const [loadOneItem] = datas;
        setItemsUserList(loadOneItem);
      });
    },
    [dispatch],
  );

  return typeof itemUserList === 'undefined' ? (
    <Center marginBottom="10px" marginTop="10px">
      <Text bold fontSize="md">
        Você ainda não criou nenhuma lista de estudos
      </Text>
    </Center>
  ) : (
    <Pressable
      onPress={() => {
        props.navigation.navigate('listDetails', {
          screen: 'listDetails',
          listIsPublic: false,
          cardItem: itemUserList,
        });
      }}>
      <PrivateCard card={itemUserList} />
    </Pressable>
  );
}

export default LoadOneCardPrivateList;
