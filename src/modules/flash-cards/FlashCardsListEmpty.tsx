import React from 'react';
import {View, Text} from 'react-native'
import { useTheme, Button } from 'react-native-paper';
import {stylessheet} from "./style/styles";

export default function FlashCardsListEmpty() {
  const themeStyles = useTheme();
  const styles = stylessheet(themeStyles);

  return (
    <View style={{...styles.emptyListContainer}}>
      <Text style={{...styles.listEmptyTitle}}>Você ainda não adicionou nenhum flash card</Text>
      <Text style={{...styles.listEmptyDescribe}}>Clique no botão abaixo e adicione um  novo flash card</Text>
      <Button 
        style={{
          ...styles.listEmptyButton
        }}
        mode='contained'
        onPress={() => {
          console.log("on press")
        }}>Adicionar</Button>
    </View>
  );
}