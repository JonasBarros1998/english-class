import React from 'react';
import {Pressable} from 'react-native';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../styles/cards';
import { List } from '@global/interfaces/Card';
import { insertFlashCards } from '../useCases/insertFlashCards';

export default function FlashCardButton(list: List) {
  const theme = useTheme();
  const css = styles(theme);
  
  if (typeof list.flashCardId === "undefined") {
    return (
      <Pressable 
        style={{
          ...css.cardListButtonFlashCard
        }}
        onPress={() => insertFlashCards(list)}>
        <Icon 
          name={"cards"}
          color={"black"}
          size={28}
          style={{...css.icon}} />
      </Pressable>
    )
  } else {
    return <></>
  }
  
  
}