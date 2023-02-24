import React, { useMemo, useState } from 'react';
import {TextInput as TextField} from 'react-native';
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
  initialWordValue?: string,
  initialTranslationValue?: string,
  initialContextValue?: string,
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

  function initialValues() {
    if (typeof props.initialWordValue !== 'undefined') {
      setWord(props.initialWordValue);
    }

    if (typeof props.initialContextValue !== 'undefined') {
      setContext(props.initialContextValue);
    }

    if (typeof props.initialTranslationValue !== 'undefined') {
      setTranslation(props.initialTranslationValue);
    }

  }

  useMemo(() => {
    initialValues();
  }, [])

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
              value={word}
              style={{...css.textInput}}
              underlineColor="black"
              activeUnderlineColor={theme.colors.primary}
              placeholder="Palavra"
              placeholderTextColor={'black'}
              editable={cardIsEditable()}
              onChangeText={(value) => {
                setWord(value);
                props.onChangeInputWord(value);
              }}
            />
            <TextInput 
              value={translation}
              style={{...css.textInput}}
              underlineColor="black"
              activeUnderlineColor={theme.colors.primary}
              placeholder="Traduçao"
              placeholderTextColor={'black'}
              editable={cardIsEditable()}
              onChangeText={(value) => {
                setTranslation(value);
                props.onChangeInputTranslation(value);
              }}
            />

            <TextInput 
              value={context}
              multiline
              style={{...css.textFieldInput}}
              underlineColor="black"
              activeUnderlineColor={theme.colors.primary}
              maxLength={400}
              placeholder="Contexto"
              placeholderTextColor={'black'}
              editable={cardIsEditable()}
              onChangeText={(value) => {
                setContext(value);
                props.onChangeInputContext(value);
              }}
            />
          </Card.Content>
        </Card>
    </View>
  )
}