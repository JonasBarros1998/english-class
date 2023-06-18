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
      textColor='#fff'
      value={props.value}
      activeUnderlineColor='#fff'
      underlineColor='#fff'
      outlineColor='#fff'
      placeholderTextColor='#fff'
      placeholder='Título da lista'
      mode={'flat'}
      onChangeText={(event) => {
        props.onChangeEvent(event);
        props.setValue(event);
      }}
      style={{
        ...style.textInput,
      }}
    />
  </View>
  )
}