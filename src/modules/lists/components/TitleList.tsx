import React, { useState } from 'react';
import {View} from 'react-native';
import {TextInput, useTheme} from 'react-native-paper';
import {titleStyle} from '../styles/titleList';

type params = {
  onChangeEvent: (event: string) => void,
  value: string,
  setValue: (event: string) => void
}

export default function TitleList(props: params) {
  const theme = useTheme() as any;

  const style = titleStyle(theme);

  return (
    <View style={{
      width: '85%',
      marginTop: 0,
      paddingTop: 0,
    }}>
    <TextInput
      value={props.value}
      activeUnderlineColor='white'
      underlineColor='white'
      outlineColor='white'
      placeholderTextColor='white'
      placeholder='Título da lista'
      mode={'flat'}
      onChangeText={(event) => {
        props.onChangeEvent(event);
        props.setValue(event);
      }}
      theme={{
        colors: {
          text: theme.colors.textSecondary
        }
      }}
      style={{
        ...style.textInput
      }}
    />
  </View>
  )
}