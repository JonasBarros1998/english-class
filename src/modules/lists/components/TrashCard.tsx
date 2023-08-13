import React from 'react';
import {Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'react-native-paper';
import {styles} from '../styles/cards';
import {componentParam} from '../types/listComponent'

export default function TashCard(props: componentParam) {

  const theme = useTheme();
  const css = styles(theme);

  return (
    <View style={{
      ...css.trashIcon
    }}>
      <Pressable onPress={() => {
        props.removeCard();
      }}>
        <Icon name='trash-can-outline' color={css.trashIcon.color} size={32}></Icon>
      </Pressable>
    </View>
  )
}
