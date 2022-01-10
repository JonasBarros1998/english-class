import React, {useState, useCallback, useEffect} from 'react';
import {Text, Pressable, FlatList} from 'native-base';
import {toLoadPublicListOfTheUserLogged} from './useCase/loadPublicList';
import PrivateCards from '@components/Cards/PrivateCard';
import {userList} from '@global/types/userList';

function PublicListOfUser() {
  const [publicList, setPublicList] = useState<userList[]>();
  const loadPublicList = useCallback(async () => {
    const loadList = await toLoadPublicListOfTheUserLogged();
    setPublicList([...loadList]);
  }, [setPublicList]);

  useEffect(() => {
    loadPublicList();
  }, [loadPublicList]);

  if (typeof publicList === 'undefined') {
    return <Text textAlign="center"> Aguarde...</Text>;
  }
  if (publicList.length === 0) {
    return (
      <Text bold fontSize="md">
        Você ainda não criou nenhuma lista de estudos
      </Text>
    );
  }

  return (
    <FlatList
      data={publicList}
      renderItem={({item}) => {
        return (
          <Pressable>
            <PrivateCards {...item} />
          </Pressable>
        );
      }}
    />
  );
}

export default PublicListOfUser;
