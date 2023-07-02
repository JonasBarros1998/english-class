import { Card } from '@global/interfaces/Card';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { createNewCard, deleteOneCard, updateInputCards } from '../useCases/managerCards';
import AddNewCardButton from './AddNewCardButton';
import SaveListButton from './SaveListButton';
import CardItem from './CardItem';
import {styles} from '../styles/titleList';
import {useTheme} from 'react-native-paper';
import TitleList from './TitleList';
import { saveListOnFirestore } from '../useCases/saveListOnFirestore';
import Info from '@components/Dialogs/Info';

export function Create() {
  const [cards, setCards] = useState<Card[]>([createNewCard()]);
  const [title, setTitle] = useState<string>('');
  const [emptyTitle, setEmptyTitle] = useState<{type: boolean, message?: string}>({type: false});
  const theme = useTheme() as any;

  const clear = () => {
    setCards([createNewCard()]);
    setTitle('');
  }

  const setValueTitle = (value: string) => setTitle(value);
  
  return (
    <>
      <View
        style={{
          ...styles.actionList,
          backgroundColor: theme.colors.primary,
          height: 50,
          paddingLeft: 10
        }}>
        <TitleList 
          onChangeEvent={(event) => setTitle(event)}
          value={title}
          setValue={setValueTitle}
        />
        <SaveListButton 
          onClickEvent={() => {
            setEmptyTitle({type: false});

            saveListOnFirestore({
              title,
              cardsOfList: cards
            })
              .then(() => clear())
              .catch(function(error: Error) {
                if(error.name === "titleValidation") {
                  setEmptyTitle({type: true, message: "Adicione um título a sua lista"});
                  return;
                }
                if (error.name === "validationCards") {
                  setEmptyTitle({type: true, message: "Preencha todos os cards adicionados"});
                  return;
                }
              })
          }}/>
      </View>

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
                cardIndex={index}
                data={cards}
                editable={true}
                removeCard={() => {
                  const cardsArray = deleteOneCard({
                    cardId: item.id,
                    cards
                  });

                  setCards([...cardsArray]);
                }}
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

      <Info message={emptyTitle.message as string} visible={emptyTitle.type} ></Info>
    </>
  )
}
