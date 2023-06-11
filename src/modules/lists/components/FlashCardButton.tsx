import React, { useState } from 'react';
import {Pressable} from 'react-native';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from '../styles/cards';
import { List } from '@global/interfaces/Card';
import { insertFlashCards } from '../useCases/insertFlashCards';
import { readFlashCards } from '../useCases/readFlashCards';


export default function FlashCardButton(list: List) {
  const theme = useTheme();
  const css = styles(theme);
  const [existFlashCard, setExistFlashCard] = useState<{icon: string; color: string}>({icon: "cards", color: "black"});

  if (readFlashCards(list).exist === false) {
    return (
      <Pressable 
        style={{
          ...css.cardListButtonFlashCard
        }}
        onPress={() => {
          if (existFlashCard.icon === "cards") {
            insertFlashCards(list);
            setExistFlashCard({icon: "check", color: "green"});
          }
        }}>
        <Icon 
          name={existFlashCard.icon}
          color={existFlashCard.color}
          size={28}
          style={{...css.icon}} />
      </Pressable>
    )
  } else {
    return <></>
  }
  
  
}