import {userList} from '@global/types/userList';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Card from '../../Cards';
import {useSelector} from 'react-redux';
import {Text} from 'native-base';

function PublicList() {
  const [publicList, setPublicList] = useState<null | userList[]>();

  const datasUserList = useSelector((state: any) => state.lists);

  useEffect(() => {
    setPublicList([...datasUserList]);
  }, [datasUserList]);

  return typeof publicList === 'undefined' ? (
    <Text textAlign="center"> Aguarde...</Text>
  ) : (
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
