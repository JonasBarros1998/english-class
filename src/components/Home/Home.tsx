import React, {useEffect, useState} from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';

import { List } from '@global/interfaces/Card';
import {navigateToListDetails} from '@modules/lists/routes/routes';
import {styles} from '@modules/lists/styles/cards';
import {findAllLists} from '@modules/lists/useCases/readLists';
import {styles as homeStyles} from './styles/main';
import { dispatchCurrentListToStore } from '@modules/lists/useCases/dispatchListToStore';

export default function Home({navigation}: {navigation: (route: string) => any}) {

  const listeningLists = useSelector<{readList: {allLists: List[]}}, List[]>((items) => items.readList.allLists);
  const [loading, setLoading] = useState(false);

  const readFiveList = listeningLists.filter((list, index) => {
    if (index <= 9) {
      return list;
    }
  });

  useEffect(() => {
    findAllLists()
      .then(() => setLoading(true))
      .catch(() => setLoading(false));
    
  }, []);

  function onClickEvent(list: List) {
    dispatchCurrentListToStore(list);
    navigateToListDetails(navigation, list.id);
  }

  const theme = useTheme();
  const homeStyle = homeStyles(theme.colors);
  const css = styles(theme);

  return (
    <>
    {
      loading === false ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Carregando listas...</Text>
        </View>
        ): (
        <View>
          <Text style={{
            ...homeStyle.title
          }}>Principais listas</Text>
          <FlatList
            testID='card'
            data={readFiveList}
            contentContainerStyle={homeStyle.fotter}
            renderItem={({item}) => {
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
      )
    }
  
    </>
  );
}
