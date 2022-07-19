import { Card } from '@global/interfaces/Card';
import React, { useState } from 'react';
import { Button, FlatList, View } from 'react-native';
import { createNewCard, updateInputCards } from '../useCases/addNewCardInList';
import AddNewCardButton from './AddNewCardButton';
import CardItem from './card';

export function Create() {
  const [cards, setCards] = useState<Card[]>([createNewCard()]);

  return (
    <View style={{
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <FlatList 
        data={cards}
        keyExtractor={({id}) => String(id)}
        renderItem={({item, index}) => {
          return (
            <CardItem
              currentItem={index}
              data={cards}
              onChangeInputWord={(value: any) => {
                updateInputCards({
                  cards,
                  cardId: item.id,
                  input: {
                    value,
                    name: "word"
                  }
                });
              }}
              onChangeInputContext={(value: string) => {
                updateInputCards({
                  cards,
                  cardId: item.id,
                  input: {
                    value,
                    name: "context"
                  }
                });
              }}
              onChangeInputTranslation={(value: string) => {
                updateInputCards({
                  cards,
                  cardId: item.id,
                  input: {
                    value,
                    name: "translation"
                  }
                });
              }}
            />
          )
        }} 
      />
      
      <AddNewCardButton 
        updateState={(card: any) => {
          const cardsArray: Card[] = [];
          cardsArray.push(...cards as any);
          cardsArray.push(card);
          setCards([...cardsArray]);
        }}
      />

    </View>
  )
}
