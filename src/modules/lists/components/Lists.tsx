import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

import { findAllLists } from '../useCases/readLists';
import { List } from '@global/interfaces/Card';

import { styles } from '../styles/cards';
import { navigateToListDetails } from '../routes/routes';

export default function Lists({navigation}: {navigation: (route: string) => any}) {
  const [lists, setLists] = useState<List[]>();
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    findAllLists()
      .then(function(response) {
        setLists([...response]);
      })
  }, []);

  async function refreshList() {
    setRefresh(true);
    findAllLists()
      .then(function(response) {
        setLists([...response]);
      })
      .catch(function() {
        setRefresh(false)
      })
      .finally(() => {
        setRefresh(false);
      });
  }

  const theme = useTheme();
  const css = styles(theme);

  return (
    <View>
      
      <FlatList
        testID='card'
        data={lists}
        refreshing={refresh}
        onRefresh={() => refreshList()}
        renderItem={({item, index}) => {
          return (
            <Pressable onPress={() => navigateToListDetails(navigation, item.id)}>
              <View style={{...css.container}} testID="content">
                <View style={{...css.card}}>
                  <Text style={{
                    ...css.cardInfo, 
                    ...css.subTitle
                    }}>{item.title}</Text>
                </View>
              </View>
            </Pressable>
          )
        }}
      />
    </View>
  )
}
