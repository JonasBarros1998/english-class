import React, {useEffect, useState, useCallback} from 'react';
import {FlatList, Pressable} from 'react-native';
import {Text} from 'native-base';
import {userList} from '@global/types/userList';
import Card from '../../Cards';
import {loadAllPublicListOfTheUserLogged} from './useCase/loadPublicList';

type param = {
  route: any;
};

function PublicList(props: param) {
  const [publicList, setPublicList] = useState<null | userList[]>();

  const toLoadListOfTheUser = useCallback(async () => {
    const lists = await loadAllPublicListOfTheUserLogged();

    setPublicList([...lists]);
  }, [setPublicList]);

  useEffect(() => {
    toLoadListOfTheUser();
  }, [toLoadListOfTheUser]);

  if (typeof publicList === 'undefined') {
    return <Text textAlign="center">Aguarde...</Text>;
  }

  return (
    <FlatList
      data={publicList}
      renderItem={({item}) => {
        return (
          <Pressable
            onPress={() => {
              props.route.navigate('listDetails', {
                screen: 'listDetails',
                cardItem: item,
                isPublicList: true,
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
