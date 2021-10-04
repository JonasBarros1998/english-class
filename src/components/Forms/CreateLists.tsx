import React, { useState } from "react";
import { FlatList } from "react-native";

import { Input, Box, Center, Button } from "native-base";

import IconAdd from '../Svgs/Add';
import {addNewCardEmpty, updateForm, getListCards} from './cards';

type cardItem = {
  id: number;
  word: string;
  translation: string;
  context: string;
};

type typeInput = 'word' | 'translation' | 'context'

function Form({cardItem, cards}: any) {
  const [word, setWords] = useState('');
  const [translation, setTranslation] = useState('');
  const [context, setContext] = useState('');

  function changeInput(input: string, cardItem: cardItem, inputType: typeInput) {
    setWords(input);
    updateForm(input, cardItem, inputType);
  }

  return (
    <Center
      width="100%"
      minWidth="100%"
      marginBottom="5"
      bg="#fff"
      rounded="lg"
      padding="3"
      shadow={1}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}>
      <Input
        onChangeText={(valueInput) => changeInput(valueInput, cardItem, 'word')}
        value={word}
        autoCorrect={false}
        variant="underlined"
        placeholder="Palavra"
        fontSize={16}
        placeholderTextColor="#78716c"
        width="100%"
        fontWeight={600}
        _focus={{
          borderBottomColor: '#000'
        }} />

      <Input
        onChangeText={(valueInput) => changeInput(valueInput, cardItem, 'translation')}
        value={translation}
        autoCorrect={false}
        variant="underlined"
        placeholder="Tradução"
        fontSize={16}
        placeholderTextColor="#78716c"
        width="100%"
        fontWeight={600}
        _focus={{
          borderBottomColor: '#000'
        }} />

      <Input
        onChangeText={(valueInput) => changeInput(valueInput, cardItem, 'context')}
        value={context}
        autoCorrect={false}
        variant="underlined"
        placeholder="Contexto"
        fontSize={16}
        placeholderTextColor="#78716c"
        width="100%"
        fontWeight={600}
        _focus={{
          borderBottomColor: '#000'
        }} />
    </Center>
  )
}

function CreateLists() {
  const [forms, setForms] = useState(getListCards());

  function changeState() {
    addNewCardEmpty();
    setForms([...getListCards()]);
  }

  return (
    <>
      <Box
        padding="2"
        flex={1}
        justifyContent="flex-start"
        alignItems="center">
        <FlatList
          data={forms}
          renderItem={({item}) => <Form cardItem={item} cards={forms}/>}
          keyExtractor={({id}) => id.toString()}
        />
        <Button borderRadius={100}
          onPress={() => changeState()}
          width="53px"
          height="53px"
          variant="unstyled"
          bg="#312E81">
          <IconAdd />
        </Button>
      </Box>
    </>
  );
}

export default CreateLists;
