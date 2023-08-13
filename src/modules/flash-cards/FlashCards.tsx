import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import { useTheme } from "react-native-paper";
import {stylessheet} from "./style/styles";
import FlashCardsListEmpty from './FlashCardsEmptyList';
import {managerFlashCards} from './use-cases/manager-flash-cards'
import { FlashCard } from '@global/interfaces/FlashCard';
import { navigateToFlashCardList } from './routes/routes';
import { useSelector } from 'react-redux';

export default function FlashCards({navigation}: {navigation: (route: string) => any}) {
  const themeStyles = useTheme();
  const styles = stylessheet(themeStyles);
  const [loading, setLoading] = useState(true);

  const item = useSelector<{flashcards: {flashcards: FlashCard[]}}, FlashCard[]>(item => {
    return item.flashcards.flashcards;
  });

  useEffect(() => {
    managerFlashCards().finally(() => setLoading(false));
  }, [item])

  if (loading === true) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Aguarde...</Text>
      </View>
    );
  }

  if (item.length === 0) {
    return <FlashCardsListEmpty navigation={navigation}/>
  }

  return (
    <FlatList 
      data={item}
      keyExtractor={(item) => {
        return item.id;
      }}
      renderItem={({item}) => {
        return (
          <Pressable onPress={() => {
            navigateToFlashCardList(navigation, item.id);
          }}>
            <View style={{...styles.container}}>
              <View style={{...styles.flashCardList}}>
                <Text style={{...styles.flashCardText}}>{item.lists.title}</Text>

                <View style={{...styles.expressions}}>
                  <Text style={{...styles.expressionsText}}>{item.lists.quantity} expressões</Text>
                </View>

                <View>
                  <Text style={{...styles.dateOpen}}>adicionado no dia: {item.date.split("-").reverse().join("/")}</Text>
                </View>
              </View>
            </View>
          </Pressable>
        );
      }}
    />
  );
}

