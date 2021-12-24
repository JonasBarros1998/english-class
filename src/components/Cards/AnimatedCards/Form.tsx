import React, {useState} from 'react';
import {Input, Box, View} from 'native-base';
import {createCard, inputName} from '@global/types/cards';
import {updateForm} from '../useCase/cards';

type param = {
  inputCard: createCard;
  updateStateComponent: Function;
};

function Form(props: param) {
  const [inputWord, setInputWord] = useState(props.inputCard.word);
  const [inputTranslation, setInputTranslation] = useState(
    props.inputCard.translation,
  );
  const [inputContext, setInputContext] = useState(props.inputCard.context);

  function changeInput(input: string, inputType: inputName) {
    updateForm(input, props.inputCard, inputType);
    props.updateStateComponent();
  }

  return (
    <Box
      width="90%"
      testID={`card-${props.inputCard.id}`}
      marginBottom="3"
      bg="#fff"
      rounded="lg"
      shadow={1}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}>
      <View width="100%" paddingTop="2">
        <Input
          onChangeText={(wordValueInput: string) => {
            setInputWord(wordValueInput);
            changeInput(wordValueInput, 'word');
          }}
          value={inputWord}
          autoCorrect={false}
          variant="underlined"
          placeholder="Palavra"
          fontSize={16}
          placeholderTextColor="#78716c"
          width="100%"
          fontWeight={600}
          _focus={{
            borderBottomColor: '#000',
          }}
        />
      </View>

      <View width="100%" paddingTop="2">
        <Input
          onChangeText={(translationValueInput: string) => {
            setInputTranslation(translationValueInput);
            changeInput(translationValueInput, 'translation');
          }}
          value={inputTranslation}
          autoCorrect={false}
          variant="underlined"
          placeholder="Tradução"
          fontSize={16}
          placeholderTextColor="#78716c"
          width="100%"
          fontWeight={600}
          _focus={{
            borderBottomColor: '#000',
          }}
        />
      </View>

      <View width="100%" paddingTop="2" paddingBottom="3">
        <Input
          onChangeText={(contextValueInput: string) => {
            setInputContext(contextValueInput);
            changeInput(contextValueInput, 'context');
          }}
          value={inputContext}
          autoCorrect={false}
          variant="underlined"
          placeholder="Contexto"
          fontSize={16}
          placeholderTextColor="#78716c"
          width="100%"
          fontWeight={600}
          _focus={{
            borderBottomColor: '#000',
          }}
        />
      </View>
    </Box>
  );
}

export default Form;
