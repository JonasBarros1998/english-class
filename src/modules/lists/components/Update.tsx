import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import CardItem from './CardItem';
import { getListDetailsOnStore} from '../useCases/getListDetails';
import { checkUserPermission, updateList } from '../useCases/updateList';
import SaveListButton from './SaveListButton';
import AddNewCardButton from './AddNewCardButton';
import TitleList from './TitleList';
import {useTheme} from 'react-native-paper';
import {styles} from '../styles/titleList';
import { Card } from '@global/interfaces/Card';
import { deleteOneCard, updateInputCards } from '../useCases/managerCards';


export default function Update({route}: any) {
  const {current} = getListDetailsOnStore();
  const userPermission = checkUserPermission(current);

  const [cards, setCards] = useState<Card[]>(current.cardsOfList);
  const [title, setTitle] = useState<string>(current.title);

  const theme = useTheme() as any;

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
          onClickEvent={function() {
            updateList({
              cardsOfList: cards,
              title: title
            })
          }} />
      </View>

      <FlatList
        data={cards}
        renderItem={({item, index}) => {
          return (
            <CardItem 
              cardIndex={index}
              data={cards}
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
              initialWordValue={item.word}
              initialTranslationValue={item.translation}
              initialContextValue={item.context}
              editable={userPermission}
              animatedCard={userPermission}
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
    </>
  );
}