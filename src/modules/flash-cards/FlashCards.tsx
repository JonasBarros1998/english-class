import React from 'react';
import { Text, View } from "react-native";
import { Button, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import {stylessheet} from "./style/styles";

export default function FlashCards() {

  const themeStyles = useTheme();
  const styles = stylessheet(themeStyles);

  return (
    <View style={{...styles.container}}>

      <View style={{
        ...styles.results
      }}>
        <View>
          <Icon name='circle' size={14} color={'#5240D6'}  style={{...styles.resultsIcon}}></Icon>
          <Text style={{...styles.resultsText}}>Estudar</Text>
          <Text style={{...styles.resultsTextNumber}}>3</Text>
        </View>

        <View>
          <Icon name='circle' size={14} color={'#D9D9D9'} style={{...styles.resultsIcon}}></Icon>
          <Text style={{...styles.resultsText}}>Total</Text>
          <Text style={{...styles.resultsTextNumber}}>13</Text>
        </View>

        <View>
          <Icon name='circle' size={14} color={'#4FC690'}  style={{...styles.resultsIcon}}></Icon>
          <Text style={{...styles.resultsText}}>Corretos</Text>
          <Text style={{...styles.resultsTextNumber}}>23</Text>
        </View>

      </View>

      <View style={{...styles.flashCard}}>
        <Text style={{...styles.flashCardText}}>Drew Line</Text>
      </View>

      <View style={{...styles.buttons}}>
        <Button 
          mode="contained" 
          labelStyle={{
            ...styles.buttonsText
          }} 
          style={{
            ...styles.dontknowVocabularyButton
          }}
          onPress={() => {
            console.log("Botão não conheço")
          }}>
          não conheço
        </Button>

        <Button 
          mode="contained"
          labelStyle={{
            ...styles.buttonsText
          }}
          style={{
            ...styles.knowVocabularyButton
          }}
          onPress={() => {
            console.log("Botão conheço")
          }}
          >
          conheço
        </Button>
      </View>

    </View>
  );
}