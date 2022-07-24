import React from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialIcons";

export default function SaveListButton(props: {onClickEvent: (event: GestureResponderEvent) => void}) {
  const theme = useTheme() as any;

  return (
    <TouchableOpacity 
      onPress={(event) => props.onClickEvent(event)}
      style={{
        paddingRight: 10
      }}>
      <Icon name="done" size={30} color={theme.colors.colorIconSecondary} />
    </ TouchableOpacity>
  );
}
