import React, {useEffect, useState} from 'react';
import {Text, Center} from 'native-base';
import {useSelector} from 'react-redux';
import {Pressable} from 'react-native';
import PrivateCard from '@components/Cards/PrivateCard';
import {userList} from '@global/types/userList';

function LoadOneCardPrivateList(props: {navigation: any}) {
  const [itemUserList, setItemsUserList] = useState<userList>();
  const {privateLists} = useSelector((state: any) => state.lists);

  useEffect(
    function () {
      const [lists] = privateLists as userList[];
      setItemsUserList(lists);
    },
    [privateLists, setItemsUserList],
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
