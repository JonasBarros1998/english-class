import React from 'react';
import {Card, TextInput, useTheme} from 'react-native-paper';
import {View} from 'react-native';
import {styles} from '../styles/cards';
import AnimatedCards from './Animated';
import {Card as typeCard} from '@global/interfaces/Card';

type componentParam = {
  onChangeInputWord: (value: string) => void,
  onChangeInputContext: (value: string) => void,
  onChangeInputTranslation: (value: string) => void,
  data: typeCard[],
  currentItem: number,
  currentCard: () => any
}

export default function CardItem(props: componentParam) {
  const theme = useTheme();
  const css = styles(theme);

  return (
    <AnimatedCards
      deleteCard={() => {
        props.currentCard();
      }}
    >
      <View style={{
        ...css.container,
        }}>
          <Card style={{
              ...css.card,
              marginBottom: props.currentItem + 1 === props.data.length ? 100 : 0,
            }}>
            <Card.Content>
              <TextInput 
                style={{...css.textInput}}
                underlineColor="black"
                activeUnderlineColor={theme.colors.primary}
                placeholder="Palavra"
                onChangeText={(value) => props.onChangeInputWord(value)}
              />
              <TextInput 
                style={{...css.textInput}}
                underlineColor="black"
                activeUnderlineColor={theme.colors.primary}
                placeholder="Contexto"
                onChangeText={(value) => props.onChangeInputContext(value)}
              />
              <TextInput 
                style={{...css.textInput}}
                underlineColor="black"
                activeUnderlineColor={theme.colors.primary}
                placeholder="Traduçao"
                onChangeText={(value) => props.onChangeInputTranslation(value)}
              />
            </Card.Content>
          </Card>
      </View>
    </AnimatedCards>
  );
}