import React, {useEffect, useState} from 'react';
import {FlatList, Pressable} from 'react-native';
import {Text, Box} from 'native-base';
import {userList} from '@global/types/userList';
import Card from '../../Cards';
import {loadAllPublicEnglishList} from './useCase/loadPublicList';
import {useSelector} from 'react-redux';

type param = {
  route: any;
};

//Function for load all public english list;
loadAllPublicEnglishList();

function PublicList(props: param) {
  const [publicList, setPublicList] = useState<userList[]>();

  const lists = useSelector(
    (datas: any) => datas.lists.searchPublicEnglishList,
  );

  useEffect(() => {
    setPublicList([...lists]);
  }, [lists]);

  if (typeof publicList === 'undefined') {
    return <Text textAlign="center">Aguarde...</Text>;
  }

  return (
    <FlatList
      data={publicList}
      renderItem={({item, index}) => {
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
      keyExtractor={({id}) => String(id)}
    />
  );
}

export default PublicList;
