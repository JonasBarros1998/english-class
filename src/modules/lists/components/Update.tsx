import React, { useState } from 'react';
import {FlatList, Text} from 'react-native';
import { Card } from '@global/interfaces/Card';
import CardItem from './CardItem';
import { getListDetailsOnStore} from '../useCases/getListDetails';
import { Button } from 'react-native-paper';
import { checkUserPermission } from '../useCases/updateList';


export default function Update({route}: any) {

  const {current} = getListDetailsOnStore();
  const userPermission = checkUserPermission(current);
  const [permission, setPermission] = useState(userPermission);

  return (
    <>
      <FlatList
        data={current.cardsOfList}
        renderItem={({item, index}) => {
          return (
            <CardItem 
              cardIndex={index}
              data={current.cardsOfList}
              removeCard={() => {}}
              onChangeInputWord={(value: any) => {}}
              onChangeInputContext={(value: string) => {}}
              onChangeInputTranslation={(value: string) => {}}
              wordInputValue={item.word}
              translationInputValue={item.translation}
              contextInputValue={item.context}
              editable={permission}
              animatedCard={permission}
            />
          )
        }}
      />
      
      <Button mode="contained" onPress={() => console.log('Editar')} style={{
        borderRadius: 0
      }}>
        Salvar
      </Button>
    </>
  );
}