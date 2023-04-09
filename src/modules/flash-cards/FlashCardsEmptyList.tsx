import React from 'react';
import {View, Text} from 'react-native'
import { useTheme, Button } from 'react-native-paper';
import {stylessheet} from "./style/styles";
import { navigateToLists} from './routes/routes';

export default function FlashCardsListEmpty({navigation}: {navigation: (route: string) => any}) {
  const themeStyles = useTheme();
  const styles = stylessheet(themeStyles);
  console.log(navigation)

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
          navigateToLists(navigation);
        }}>Adicionar</Button>
    </View>
  );
}