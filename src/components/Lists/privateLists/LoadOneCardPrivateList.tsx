import React, {useEffect, useCallback, useState} from 'react';

import {Text, Center} from 'native-base';

import PrivateCard from '@components/Cards/PrivateCard';
import {loadPrivateList} from './useCase/loadPrivateList';
import {userList} from '@global/types/userList';

function LoadOneCardPrivateList() {
  const [itemUserList, setItemsUserList] = useState<userList>();

  const dataUserList = useCallback(async () => {
    const [datas] = await loadPrivateList();
    return setItemsUserList(datas);
  }, []);

  useEffect(() => {
    dataUserList();
  });

  return typeof itemUserList === 'undefined' ? (
    <Center marginBottom="10px" marginTop="10px">
      <Text bold fontSize="md">
        Você ainda não criou nenhuma lista de estudos
      </Text>
    </Center>
  ) : (
    <PrivateCard {...itemUserList} />
  );
}

export default LoadOneCardPrivateList;
