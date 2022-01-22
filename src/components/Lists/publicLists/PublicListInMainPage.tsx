import React, {useCallback, useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import {FlatList, Text} from 'native-base';
import {useDispatch} from 'react-redux';
import {publicLists} from '@pubsub/lists';
import {userList as typeUserList} from '@global/types/userList';
import {toLoadPublicListOfTheUserLogged} from './useCase/loadPublicList';
import PrivateCards from '@components/Cards/PrivateCard';

function PublicListInMainPage(props: {navigation: any}) {
  const [publicList, setPublicList] = useState<typeUserList[]>();
  const dispatch = useDispatch();

  const loadData = useCallback(() => {
    toLoadPublicListOfTheUserLogged(2).then(function (response) {
      if (response === null) {
        setPublicList([]);
        return;
      }

      if (typeof response === 'undefined') {
        setPublicList(undefined);
        return;
      }
      dispatch(publicLists(response));
      setPublicList([...response]);
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
      renderItem={({item}) => {
        return (
          <Pressable
            onPress={() => {
              props.navigation.navigate('listDetails', {
                screen: 'listDetails',
                cardItem: item,
                isPublicList: true,
              });
            }}>
            <PrivateCards card={item} />
          </Pressable>
        );
      }}
    />
  );
}

export default PublicListInMainPage;
