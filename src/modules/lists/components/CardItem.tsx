import React, { useState } from 'react';
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
  cardIndex: number,
  removeCard: () => any,
  wordInputValue?: string,
  translationInputValue?: string,
  contextInputValue?: string,
  editable?: boolean,
  animatedCard?: boolean
}

export default function CardItem(props: componentParam) {

  return (
    <>
      {
        props.animatedCard === false
        ? <Item {...props} />
        : <AnimatedCards
            deleteCard={() => {
              props.removeCard();
            }}>
          <Item {...props} />
        </AnimatedCards>
      }
    </>
  );
}

export function Item(props: componentParam) {
  const [word, setWord] = useState<string>('');
  const [context, setContext] = useState<string>('');
  const [translation, setTranslation] = useState<string>('');

  const theme = useTheme();
  const css = styles(theme);


  const cardIsEditable = () => {
    const isEditable = typeof props.editable === 'undefined' || props.editable === false;
    if(isEditable) {
      return false;
    }
    return true;
  }

  return (
    <View style={{
      ...css.container,
      }}>
        <Card style={{
            ...css.card,
            marginBottom: props.cardIndex + 1 === props.data.length ? 100 : 0,
          }}>
          <Card.Content>
            <TextInput 
              value={typeof props.wordInputValue !== 'undefined' ? props.wordInputValue : word}
              style={{...css.textInput}}
              underlineColor="black"
              activeUnderlineColor={theme.colors.primary}
              placeholder="Palavra"
              editable={cardIsEditable()}
              onChangeText={(value) => {
                setWord(value);
                props.onChangeInputWord(value);
              }}
            />
            <TextInput 
              value={typeof props.contextInputValue !== 'undefined' ? props.contextInputValue : context}
              style={{...css.textInput}}
              underlineColor="black"
              activeUnderlineColor={theme.colors.primary}
              placeholder="Contexto"
              editable={cardIsEditable()}
              onChangeText={(value) => {
                setContext(value);
                props.onChangeInputContext(value);
              }}
            />
            <TextInput 
              value={typeof props.translationInputValue !== 'undefined' ? props.translationInputValue : translation}
              style={{...css.textInput}}
              underlineColor="black"
              activeUnderlineColor={theme.colors.primary}
              placeholder="Traduçao"
              editable={cardIsEditable()}
              onChangeText={(value) => {
                setTranslation(value);
                props.onChangeInputTranslation(value);
              }}
            />
          </Card.Content>
        </Card>
    </View>
  )
}