import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useTheme, Button} from 'react-native-paper';
import {styles} from './style/main';
import { saveDataOnFirestore } from './useCases/saveDatasOnFirestore';
import Info from '@components/Dialogs/Info';

export function HelpForm({navigation}: any) {
  const theme = useTheme();
  const style = styles(theme.colors);
  const [describe, setDescribe] = useState("");
  const [disable, setDisable] = useState(true);
  const [dialog, setDialog] = useState(false);

  function send() {
    if (dialog === true) {
      setDialog(false)
    };

    setDisable(true);
    
    saveDataOnFirestore({
      describe: describe,
      date: new Date().toISOString()
    })
      .then(function() {
        setDialog(true);
      })
      .catch(function(error) {
        throw error;
    })
      .finally(function() {
        setDescribe("");
        setDisable(true);
    });
    
  }

  function maxLength() {

    if (describe.length <= 20) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }


  return (
    <>
      <View style={{...style.container}}>
        <Text style={{...style.title}}>Descreva o que podemos melhorar neste aplicativo</Text>
        <TextInput 
          multiline
          style={{...style.input}}
          numberOfLines={4}
          autoFocus={true}
          value={describe} 
          onChangeText={(value) => {
            setDescribe(value);
            maxLength();
          }} />

          <Button 
            mode='contained'
            style={{...style.button}}
            onPress={() => send()}
            disabled={disable}
            >Enviar</Button>
        <Text style={{...style.footerText}}>*sua resposta será enviada de forma anônima</Text>
      </View>

      <Info visible={dialog} message={"Mensagem enviada! Obrigado ;)"} />
  
    </>

    
  );
}