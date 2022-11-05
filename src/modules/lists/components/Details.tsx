import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import CardItem from './CardItem';
import {getListDetails} from '../useCases/getListDetails';
import { Card } from '@global/interfaces/Card';
import { Button } from 'react-native-paper';

export default function Details({route}: any) {

  const [cards, setCards] = useState<Card[]>();
  const {id} = route.params;

  useEffect(() => {
    getListDetails(id)
    .then(function(response) {
      const [{cardsOfList}] = response;
      setCards([...cardsOfList]);
    });
  }, []);

  return (
    <>
      <FlatList
        data={cards}
        renderItem={({item, index}) => {
          return (
            <CardItem 
              cardIndex={index}
              data={cards as Card[]}
              removeCard={() => {}}
              onChangeInputWord={(value: any) => {}}
              onChangeInputContext={(value: string) => {}}
              onChangeInputTranslation={(value: string) => {}}
              wordInputValue={item.word}
              translationInputValue={item.translation}
              contextInputValue={item.context}
              editable={false}
              animatedCard={false}
            />
          )
        }}
      />
      
      <Button mode="contained" onPress={() => console.log('Editar')} style={{
        borderRadius: 0
      }}>
        Editar
      </Button>
    </>

  )
}
