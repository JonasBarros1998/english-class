import React from 'react';
import {Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'react-native-paper';
import {styles} from '../styles/cards';
import {componentParam} from '../types/listComponent'

export default function TashCard(props: componentParam) {

  const theme = useTheme();
  const css = styles(theme);

  return (
    <View style={{
      ...css.container,
      ...css.trashIcon
    }}>
      <Pressable onPress={() => {
        props.removeCard();
      }}>
        <Icon name='restore-from-trash' color={css.trashIcon.color} size={32}></Icon>
      </Pressable>
    </View>
  )
}
