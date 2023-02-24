import { Card } from '@global/interfaces/Card';
import { logEvent } from '@services/analytics/events';
import React from 'react';
import { View } from 'react-native';
import { IconButton, useTheme } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialIcons";
import {styles} from '../styles/button'
import { onClickCreateCard } from '../tracking/events';
import { createNewCard } from '../useCases/managerCards';

export default function AddNewCardButton(props: {updateState: (card: Card) => void}) {
  
  const {colors} = useTheme();
  const styleComponent = styles(colors) as any;

  return (
    <View 
      testID='button'
      style={{
      ...styleComponent.button
    }}>
      <IconButton
        icon={() => {
          return <Icon 
            name="add"
            size={30}
            color={colors.background} 
          />
        }}
        style={{
          ...styleComponent.icon
        }}
        size={20}
        onPress={() => {
          const newCard = createNewCard();
          onClickCreateCard(newCard.id);
          props.updateState(newCard);
        }}
      />
    </View>
  )
}
