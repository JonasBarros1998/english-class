import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Text} from 'native-base';
import {useDispatch} from 'react-redux';
import Card from '../../Cards';
import {toLoadPublicListOfTheUserLogged} from './useCase/loadPublicList';
import {publicLists} from '@pubsub/lists';
import {userList as typeUserList} from '@global/types/userList';

function PublicListInMainPage() {
  const [publicList, setPublicList] = useState<typeUserList[]>();

  const dispatch = useDispatch();

  const loadData = useCallback(() => {
    toLoadPublicListOfTheUserLogged(10).then(function (response) {
      setPublicList(response);
      if (response === null || typeof response === 'undefined') {
        setPublicList(undefined);
        return;
      }
      dispatch(publicLists(response));
      const loadTwoListOfUser = response.filter((_, index) => index !== 2);
      setPublicList([...loadTwoListOfUser]);
    });
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (typeof publicList === 'undefined') {
    return <Text textAlign="center"> Aguarde...</Text>;
  }

  if (publicList.length === 0) {
    return (
      <Text textAlign="center">Você ainda não criou nenhuma lista pública</Text>
    );
  }

  return (
    <FlatList
      data={publicList}
      keyExtractor={({id}) => String(id)}
      renderItem={({item}) => <Card {...item} />}
    />
  );
}

export default PublicListInMainPage;
