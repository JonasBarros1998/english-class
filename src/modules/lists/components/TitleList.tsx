import React from 'react';
import {View} from 'react-native';
import {TextInput, useTheme} from 'react-native-paper';
import {titleStyle} from '../styles/titleList';

export default function TitleList() {
  const theme = titleStyle(useTheme()) as any;
  
  return (
    <View style={{
      width: '85%',
      marginTop: 0,
      paddingTop: 0,
    }}>
    <TextInput
      activeUnderlineColor='white'
      underlineColor='white'
      outlineColor='white'
      placeholderTextColor='white'
      placeholder='Título da lista'
      mode={'flat'}
      theme={{
        colors: {
          text: theme.colors.textSecondary
        }
      }}
      style={{
        marginTop: 0,
        paddingTop: 0,
        height: 30,
        backgroundColor: theme.colors.textInputBackgroundFlat,
        paddingLeft: 0,
      }}
    />
  </View>
  )
}