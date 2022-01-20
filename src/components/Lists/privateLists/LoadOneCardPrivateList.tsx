import React, {useEffect, useState} from 'react';

import {Text, Center} from 'native-base';
import {useDispatch} from 'react-redux';

import PrivateCard from '@components/Cards/PrivateCard';
import {loadPrivateList} from './useCase/loadPrivateList';
import {userList} from '@global/types/userList';

function LoadOneCardPrivateList() {
  const [itemUserList, setItemsUserList] = useState<userList>();
  const dispatch = useDispatch();

  useEffect(
    function () {
      loadPrivateList({
        dispatch,
      }).then(function (datas) {
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
    <PrivateCard card={itemUserList} />
  );
}

export default LoadOneCardPrivateList;
