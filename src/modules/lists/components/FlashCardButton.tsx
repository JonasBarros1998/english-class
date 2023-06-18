import React, { useEffect, useState } from 'react';
import {Pressable} from 'react-native';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../styles/cards';
import { List } from '@global/interfaces/Card';
import { insertFlashCards } from '../useCases/insertFlashCards';

export default function FlashCardButton(list: List) {
  const theme = useTheme();
  const css = styles(theme);
  const [flashCardIcon, setflashCardIcon] = useState<{icon: string; color: string}>({icon: "cards", color: "black"});
  
  if (typeof list.flashCardId === "undefined") {
    return (
      <Pressable 
        style={{
          ...css.cardListButtonFlashCard
        }}
        onPress={() => {
          if (flashCardIcon.icon === "cards") {
            insertFlashCards(list);
            setflashCardIcon({icon: "check", color: "green"});
          }
        }}>
        <Icon 
          name={flashCardIcon.icon}
          color={flashCardIcon.color}
          size={28}
          style={{...css.icon}} />
      </Pressable>
    )
  } else {
    return <></>
  }
  
  
}