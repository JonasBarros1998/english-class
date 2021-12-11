import {userList} from '@global/types/userList';
import React, {useEffect, useCallback, useState} from 'react';
import {FlatList} from 'react-native';
import Card from '../../Cards';
import {loadPublicList} from './useCase/loadPublicList';

function PublicList() {
  const [publicList, setPublicList] = useState<null | userList[]>();

  const loadData = useCallback(() => {
    loadPublicList().then(function (response) {
      setPublicList(response);
    });
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <FlatList
      data={publicList}
      renderItem={({item}) => {
        return <Card {...item} />;
      }}
      keyExtractor={({id}) => String(id)}
    />
  );
}

export default PublicList;
