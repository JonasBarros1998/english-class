import React, {useState} from 'react';
import {FlatList, Pressable} from 'react-native';

import {Input, Box, Center, Button, Flex} from 'native-base';

import IconAdd from '../Svgs/Add';
import Done from '../Svgs/Done';
import {addNewCardEmpty, updateForm, getListCards, clearList} from './cards';
import {insert} from '@database/index';

type cardItem = {
  id: number;
  word: string;
  translation: string;
  context: string;
};

type typeInput = 'word' | 'translation' | 'context';

function Form({cardItem}: any) {
  const [word, setWords] = useState('');
  const [translation, setTranslation] = useState('');
  const [context, setContext] = useState('');

  function changeInput(input: string, item: cardItem, inputType: typeInput) {
    updateForm(input, item, inputType);
  }

  return (
    <Center
      testID={`card-${cardItem.id}`}
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
        onChangeText={(valueInput: string) => {
          setWords(valueInput);
          changeInput(valueInput, cardItem, 'word');
        }}
        value={word}
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

      <Input
        onChangeText={(valueInput: string) => {
          setTranslation(valueInput);
          changeInput(valueInput, cardItem, 'translation');
        }}
        value={translation}
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

      <Input
        onChangeText={(valueInput: string) => {
          setContext(valueInput);
          changeInput(valueInput, cardItem, 'context');
        }}
        value={context}
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
    </Center>
  );
}

function CreateLists() {
  const [forms, setForms] = useState(getListCards());
  const [placeholder, setPlaceholder] = useState('TITULO DA LISTA');
  const [titleList, setTitleList] = useState('');

  function changeState() {
    addNewCardEmpty();
    setForms([...getListCards()]);
  }

  async function submitForm() {
    const submit = [
      {
        title: titleList,
        cards: getListCards(),
      },
    ];
    await insert(submit, '/123456789/lists')
      .catch(function (erro) {
        Promise.reject(new Error(erro.message));
      })
      .finally(function () {
        clearList();
        setForms([...getListCards()]);
        setTitleList('');
      });
  }

  return (
    <>
      <Flex
        bg="#312E81"
        display="flex"
        width="100%"
        direction="row"
        paddingTop={2}
        paddingBottom={2}
        justifyContent="space-between">
        <Box width="91%">
          <Input
            onPressIn={() => setPlaceholder('')}
            value={titleList}
            onChangeText={(valueInput: string) => setTitleList(valueInput)}
            autoCorrect={false}
            variant="underlined"
            borderBottomColor="#312E81"
            placeholder={placeholder}
            fontSize={16}
            placeholderTextColor="#FFF"
            fontWeight={600}
            color="#FFF"
            maxLength={30}
            _web={{
              fontWeight: 700,
            }}
            _focus={{
              borderBottomColor: '#312E81',
            }}
          />
        </Box>
        <Box width="9%" flexDirection="column" justifyContent="center">
          <Pressable
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            onPress={() => submitForm()}>
            <Done />
          </Pressable>
        </Box>
      </Flex>

      <Box padding="2" flex={1} justifyContent="flex-start" alignItems="center">
        <FlatList
          data={forms}
          renderItem={({item}) => <Form cardItem={item} cards={forms} />}
          keyExtractor={({id}) => id.toString()}
        />
        <Button
          borderRadius={100}
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
