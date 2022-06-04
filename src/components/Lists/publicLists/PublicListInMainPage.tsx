import React, {useCallback, useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import {FlatList, Text, Box} from 'native-base';
import {useSelector} from 'react-redux';
import {userList as typeUserList} from '@global/types/userList';
import PrivateCards from '@components/Cards/PrivateCard';

function PublicListOnMainPage(props: {navigation: any}) {
  const [publicList, setPublicList] = useState<typeUserList[]>();

  const listOfUserLogged = useSelector(
    (state: any) => state.lists.publicListOfUserLogged,
  );

  const loadData = useCallback(() => {
    if (listOfUserLogged === null) {
      setPublicList([]);
      return;
    }

    if (typeof listOfUserLogged === 'undefined') {
      setPublicList(undefined);
      return;
    }

    setPublicList([...listOfUserLogged]);
  }, [listOfUserLogged]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (typeof publicList === 'undefined') {
    return <Text textAlign="center"> Aguarde...</Text>;
  }

  if (publicList.length === 0) {
    return (
      <Text textAlign="center" fontSize="md" marginTop="10px">
        Suas listas públicas apareceram aqui
      </Text>
    );
  }

  return (
    <FlatList
      data={publicList}
      keyExtractor={({id}) => String(id)}
      renderItem={({item, index}) => {
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
            {publicList.length - 1 === index ? (
              <>
                <Box marginBottom={'32'} />
              </>
            ) : (
              <></>
            )}
          </Pressable>
        );
      }}
    />
  );
}

export default PublicListOnMainPage;
