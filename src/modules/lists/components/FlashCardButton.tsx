import React from 'react';
import {Pressable} from 'react-native';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../styles/cards';
import { List } from '@global/interfaces/Card';
import { insertFlashCards } from '../useCases/insertFlashCards';
import store from '@state/redux/store';

export default function FlashCardButton(list: List) {
  const [user] = store.getState().user;
  const theme = useTheme();
  const css = styles(theme);

  const item = list.flashCards?.find(item => item.userId === user.id);

  if (typeof item === "undefined") {
    return (
      <Pressable 
        style={{
          ...css.cardListButtonFlashCard
        }}
        onPress={() => {
          insertFlashCards(list);
        }}>
        <Icon 
          name={"cards"}
          color={"black"}
          size={28}
          style={{...css.icon}} 
          />
      </Pressable>
    )
  } else {
    return <></>

  }
}