import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import { useTheme } from "react-native-paper";
import {stylessheet} from "./style/styles";
import FlashCardsListEmpty from './FlashCardsEmptyList';
import {managerFlashCards} from './use-cases/manager-flash-cards'
import { FlashCard } from '@global/interfaces/FlashCard';
import { navigateToFlashCardList } from './routes/routes';

export default function FlashCards({navigation}: {navigation: (route: string) => any}) {
  const themeStyles = useTheme();
  const styles = stylessheet(themeStyles);
  
  
  const [flashCardsDatas, setFlashCardsDatas] = useState<FlashCard[]>([]);

  console.log("Carregou o flashcards list");

  useEffect(() => {
    managerFlashCards()
      .then((item) => {
        if(item === null) {
          setFlashCardsDatas([]);
          return;
        }
        setFlashCardsDatas([...item]);
      });
  }, [])

  return (
    
    <>
      {console.log("Carregou componente >>> ")}

      {
        flashCardsDatas.length === 0 ? <FlashCardsListEmpty navigation={navigation}/>
        : (
          <FlatList 
            data={flashCardsDatas}
            keyExtractor={(item) => {
              console.log("comp: ", item)
              return item.id;
            }}
            renderItem={({item}) => {
              return (
                <Pressable onPress={() => {
                  navigateToFlashCardList(navigation, item.id);
                }}>
                  <View style={{...styles.container}}>
                    <View style={{...styles.flashCardList}}>
                      <Text style={{...styles.flashCardText}}>{item.id}</Text>

                      <View style={{...styles.expressions}}>
                        <Text style={{...styles.expressionsText}}>15 Expressões</Text>
                      </View>

                      <View>
                        <Text style={{...styles.dateOpen}}>aberto em: {item.date.split("-").reverse().join("/")}</Text>
                      </View>
                    </View>
                  </View>
                </Pressable>
              );
            }}
          />
        )
      }
    </>
  );
}

