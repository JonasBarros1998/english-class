import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { List } from '@global/interfaces/Card';

import { styles } from '../styles/cards';
import { navigateToListDetails } from '../routes/routes';
import { dispatchCurrentListToStore } from '../useCases/dispatchListToStore';
import { useSelector } from 'react-redux';
import { onClickListItem } from '../tracking/events';

export default function Lists({navigation}: {navigation: (route: string) => any}) {

  const listeningLists =  useSelector<{readList: {allLists: List[]}}, List[]>(items => items.readList.allLists)


  function onClickEvent(list: List) {
    onClickListItem(list);
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
            <View style={{...css.container}} testID="content">
              <View style={{...css.cardList}}>
                <Pressable 
                  onPress={() => onClickEvent(item)}
                  style={{
                    ...css.cardListButtonTitle
                  }}>
                  <Text style={{
                    ...css.cardInfo, 
                    ...css.subTitle
                    }}>{item.title}</Text>
                </Pressable>

                <Pressable 
                  style={{
                    ...css.cardListButtonFlashCard
                  }}
                  onPress={() => console.log("on press list")}>
                  <Icon 
                    name='cards'
                    color={"black"}
                    size={28}
                    style={{...css.icon}}/>
                </Pressable>

              </View>
            </View>
          )
        }}
      />
    </View>
    </>
  )
}
