import React from 'react';
import {View, Text, FlatList} from 'react-native';
import { useTheme } from "react-native-paper";
import {stylessheet} from "./style/styles";


export default function FlashCardsList() {
  const themeStyles = useTheme();
  const styles = stylessheet(themeStyles);

  return (
    <FlatList 
      data={[{id: '1'}]}
      keyExtractor={({id}) => String(id)}
      renderItem={({}) => {
        return (
          <View style={{...styles.container}}>
            <View style={{...styles.flashCardList}}>
              <Text style={{...styles.flashCardText}}>Food</Text>

              <View style={{...styles.expressions}}>
                <Text style={{...styles.expressionsText}}>15 Expressões</Text>
              </View>

              <View>
                <Text style={{...styles.dateOpen}}>aberto em: 15/05/2025</Text>
              </View>
            </View>
          </View>
        );
      }}
    
    />
  );
}

