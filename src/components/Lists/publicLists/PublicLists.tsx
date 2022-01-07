import React, {useEffect, useState} from 'react';
import {FlatList, Pressable} from 'react-native';
import {Text} from 'native-base';
import {useSelector} from 'react-redux';
import {userList} from '@global/types/userList';
import Card from '../../Cards';

type param = {
  route: any;
};

function PublicList(props: param) {
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
        return (
          <Pressable
            onPress={() => {
              props.route.navigate('listDetails', {
                screen: 'listDetails',
                cardItem: item,
              });
            }}>
            <Card {...item} />
          </Pressable>
        );
      }}
      keyExtractor={({id}) => String(id)}
    />
  );
}

export default PublicList;
