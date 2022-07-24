import React, { useState } from 'react';
import {View} from 'react-native';
import {TextInput, useTheme} from 'react-native-paper';
import {titleStyle} from '../styles/titleList';

export default function TitleList(props: {onChangeEvent: (event: string) => void}) {
  const [title, setTitle] = useState<string>();
  const theme = useTheme() as any;

  const style = titleStyle(theme);

  return (
    <View style={{
      width: '85%',
      marginTop: 0,
      paddingTop: 0,
    }}>
    <TextInput
      value={title}
      activeUnderlineColor='white'
      underlineColor='white'
      outlineColor='white'
      placeholderTextColor='white'
      placeholder='Título da lista'
      mode={'flat'}
      onChangeText={(event) => {
        props.onChangeEvent(event);
        setTitle(event);
      }
        
      }
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