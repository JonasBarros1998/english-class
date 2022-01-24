import React, {useState, useCallback, useEffect} from 'react';
import {FlatList} from 'react-native';
import {Text, Pressable, Box} from 'native-base';
import {toLoadPublicListOfTheUserLogged} from './useCase/loadPublicList';
import PrivateCards from '@components/Cards/PrivateCard';
import {userList} from '@global/types/userList';

type param = {
  navigation: any;
};

function PublicListOfUser(props: param) {
  const [publicList, setPublicList] = useState<userList[]>();
  const loadPublicList = useCallback(async () => {
    const loadList = await toLoadPublicListOfTheUserLogged();
    if (typeof loadList !== 'undefined') {
      setPublicList([...loadList]);
    }
  }, [setPublicList]);

  useEffect(() => {
    loadPublicList();
  }, [loadPublicList]);

  if (typeof publicList === 'undefined') {
    return <Text textAlign="center"> Aguarde...</Text>;
  }
  if (publicList.length === 0) {
    return (
      <Text fontSize="md" textAlign={'center'}>
        Você ainda não criou nenhuma lista pública
      </Text>
    );
  }

  return (
    <FlatList
      data={publicList}
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

export default PublicListOfUser;
