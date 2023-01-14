import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from './styles/main';
import {useTheme} from 'react-native-paper';
import {navigateToHelpForm} from '@modules/Form/routes/routes';


export default function Header({navigation}: any) {
  const theme = useTheme()
  const {header, titleLeft, opnion, opnionText} = styles(theme.colors);

  return(
    <View style={{...header}}>
      <Text style={{...titleLeft}}>Inicio</Text>
      <Pressable onPress={() => navigateToHelpForm(navigation)}>
        <View style={{...opnion}}>
          <Text style={{...opnionText}}>Dê a sua opnião</Text>
        </View>
      </Pressable>
    </View>
  );
}