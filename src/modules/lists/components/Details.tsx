import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import CardItem from './CardItem';
import {getListDetails, showEditarButton} from '../useCases/getListDetails';
import { Card } from '@global/interfaces/Card';
import { Button } from 'react-native-paper';
import { navigateToUpdateList } from '../routes/routes';

export default function Details({route, navigation}: any) {

  const [cards, setCards] = useState<Card[]>();
  const showButton = showEditarButton();

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
              animatedCard={false}
            />
          )
        }}
      />
      
      {
        showButton === true 
          ? <Button mode="contained" onPress={() => navigateToUpdateList(navigation)} style={{
            borderRadius: 0
          }}>
            Editar
          </Button>
          
          : <></>
      }
    </>

  )
}
