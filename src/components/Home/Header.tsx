import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles/main';


export default function Header() {
  const {header, titleLeft} = styles();

  return(
    <View style={{...header}}>
      <Text style={{...titleLeft}}>Inicio</Text>
      <Text>Help</Text>
    </View>
  );
}