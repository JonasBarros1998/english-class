import React, {useEffect, useState} from 'react';
import {FlatList, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import {Box, Text} from 'native-base';
import PrivateCards from '@components/Cards/PrivateCard';
import {loadPrivateList} from './useCase/loadPrivateList';
import {userList as typeUserList} from '@global/types/userList';

function PrivateList({navigation}: any) {
  const [privateLists, setPrivateLists] = useState<typeUserList[]>([]);
  const dispatch = useDispatch();
  useEffect(
    function () {
      loadPrivateList({})
        .then(function (response) {
          setPrivateLists([...response]);
        })
        .catch(function () {
          setPrivateLists([]);
        });
    },
    [dispatch],
  );
  return (
    <>
      {privateLists.length === 0 ? (
        <Text fontSize="md" textAlign={'center'}>
          Suas listas privadas apareceram aqui
        </Text>
      ) : (
        <Box>
          <FlatList
            data={privateLists}
            renderItem={({item, index}) => {
              return (
                <Pressable
                  onPress={() => {
                    navigation.navigate('listDetails', {
                      screen: 'listDetails',
                      listIsPublic: false,
                      cardItem: item,
                    });
                  }}>
                  <PrivateCards card={item} />
                  {privateLists.length - 1 === index ? (
                    <>
                      <Box marginBottom={'32'} />
                    </>
                  ) : (
                    <></>
                  )}
                </Pressable>
              );
            }}
            keyExtractor={({id}, key) => String(key)}
          />
        </Box>
      )}
    </>
  );
}

export default PrivateList;
