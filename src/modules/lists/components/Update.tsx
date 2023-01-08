import React, {useState} from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
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
import Info from '@components/Dialogs/Info';
import Icon from "react-native-vector-icons/MaterialIcons";
import { navigationBackToDetails } from '../routes/routes';


export default function Update({route, navigation}: any) {
  const {current} = getListDetailsOnStore();
  const userPermission = checkUserPermission(current);

  const [cards, setCards] = useState<Card[]>(current.cardsOfList);
  const [title, setTitle] = useState<string>(current.title);
  const [dialog, setDialog] = useState<boolean>(false);

  const theme = useTheme() as any;

  const setValueTitle = (value: string) => setTitle(value);

  return (
    <>
      <View 
        style={{
          ...styles.actionList,
          backgroundColor: theme.colors.primary,
          height: 50,
          paddingLeft: 5,
        }}>
        <Pressable onPress={() => navigationBackToDetails(navigation)}>
          <View>
            <Icon name="arrow-back" size={25} color={theme.colors.textSecondary} />
          </View>
        </Pressable>
        <TitleList 
          onChangeEvent={(event) => setTitle(event)}
          value={title}
          setValue={setValueTitle}
        />
        <SaveListButton 
          onClickEvent={function() {
            if (dialog === true) setDialog(false)

            updateList({
              cardsOfList: cards,
              title: title
            }).then(() => setDialog(true))
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

      <Info visible={dialog} message={"Lista atualizada!"} />
    </>

    
  );
}