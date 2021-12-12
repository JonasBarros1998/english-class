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
      if (response === null) {
        setPublicList(null);
        return;
      }
      dispatch(publicLists(response));
      const [firstItem, secondItem] = response;
      setPublicList([firstItem, secondItem]);
    });
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return publicList === null || typeof publicList === 'undefined' ? (
    <Text textAlign="center"> Aguarde...</Text>
  ) : (
    <FlatList
      data={publicList}
      keyExtractor={({id}, key) => String(key)}
      renderItem={({item}) => <Card {...item} />}
    />
  );
}

export default PublicListInMainPage;
