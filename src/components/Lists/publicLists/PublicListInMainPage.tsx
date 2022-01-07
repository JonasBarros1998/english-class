import React, {useCallback, useEffect, useState} from 'react';
import Card from '../../Cards';
import {loadPublicList} from './useCase/loadPublicList';
import {useDispatch} from 'react-redux';
import {publicLists} from '@pubsub/lists';
import {userList as typeUserList} from '@global/types/userList';
import {FlatList, Text} from 'native-base';

function PublicListInMainPage() {
  const [publicList, setPublicList] = useState<null | typeUserList[]>();

  const dispatch = useDispatch();

  const loadData = useCallback(() => {
    loadPublicList().then(function (response) {
      setPublicList(response);
      if (response === null || typeof response === 'undefined') {
        setPublicList(null);
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

  if (publicList === null) {
    return <Text textAlign="center">Nenhuma lista pública foi criada</Text>;
  }

  return typeof publicList === 'undefined' ? (
    <Text textAlign="center"> Aguarde...</Text>
  ) : (
    <FlatList
      data={publicList}
      keyExtractor={({id}) => String(id)}
      renderItem={({item}) => <Card {...item} />}
    />
  );
}

export default PublicListInMainPage;
