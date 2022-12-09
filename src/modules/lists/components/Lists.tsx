import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

import { List } from '@global/interfaces/Card';

import { styles } from '../styles/cards';
import { navigateToListDetails } from '../routes/routes';
import { dispatchCurrentListToStore } from '../useCases/dispatchListToStore';
import { useSelector } from 'react-redux';

export default function Lists({navigation}: {navigation: (route: string) => any}) {

  const listeningLists =  useSelector<{readList: {allLists: List[]}}, List[]>(items => items.readList.allLists)


  function onClickEvent(list: List) {
    dispatchCurrentListToStore(list);
    navigateToListDetails(navigation, list.id);
  }

  const theme = useTheme();
  const css = styles(theme);

  return (
    <>

    <View>
      
      <FlatList
        testID='card'
        data={listeningLists}
        contentContainerStyle={{
          ...css.fotter
        }}
        renderItem={({item, index}) => {
          return (
            <Pressable onPress={() => onClickEvent(item)}>
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
    </>
  )
}
