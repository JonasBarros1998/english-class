import React, {useState} from 'react';
import {FlatList, Pressable, Animated, PanResponder} from 'react-native';

import {Input, Box, Center, Button, Flex, View} from 'native-base';

import IconAdd from '../Svgs/Add';
import Done from '../Svgs/Done';
import {
  addNewCardEmpty,
  updateForm,
  getListCards,
  clearList,
  deleteItem,
} from './cards';
import {insert} from '@database/index';
import AlertPopover from './AlertDialog';
import {validListTitle} from './validListTitle';
import {WIDTH_SCREEN as widthScreen} from './Constants';
import ComponentActionSheet from './ActionSheet';

type cardItem = {
  id: number;
  word: string;
  translation: string;
  context: string;
};

type typeInput = 'word' | 'translation' | 'context';

function Form({cardItem, setForms}: any) {
  const [word, setWords] = useState('');
  const [translation, setTranslation] = useState('');
  const [context, setContext] = useState('');

  function changeInput(input: string, item: cardItem, inputType: typeInput) {
    updateForm(input, item, inputType);
  }

  const position = new Animated.ValueXY();

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      if (parseInt(gesture.dx.toFixed(), 10) >= 0) {
        position.setValue({x: 0, y: 0});
        return;
      }
      position.setValue({x: gesture.dx, y: 0});
    },

    onPanResponderRelease: (event, gesture) => {
      const deleteCard = parseInt(gesture.dx.toFixed(), 10) <= -50;
      if (deleteCard) {
        Animated.spring(position, {
          toValue: {
            x: widthScreen - 1000,
            y: gesture.dy,
          },
          tension: 5,
          useNativeDriver: true,
        }).start();
        deleteItem(cardItem);
        setForms([...getListCards()]);
        return;
      }
      Animated.spring(position, {
        toValue: {
          x: 0,
          y: 0,
        },
        tension: 5,
        useNativeDriver: true,
      }).start();
    },
  });

  const handlers = panResponder.panHandlers;

  return (
    <Animated.View style={[position.getTranslateTransform()]} {...handlers}>
      <View>
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
          <View width="100%">
            <Input
              onChangeText={(valueInput: string) => {
                setWords(valueInput);
                changeInput(valueInput, cardItem, 'word');
              }}
              bgColor="blue.500"
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
          </View>

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
      </View>
    </Animated.View>
  );
}

function CreateLists() {
  const [forms, setForms] = useState(getListCards());
  const [placeholder, setPlaceholder] = useState('TITULO DA LISTA');
  const [titleList, setTitleList] = useState('');
  const [visible, setVisible] = useState(false);
  const [enableScreen, setEnableScreen] = useState({
    enable: false,
    closed: true,
  });

  function changeState() {
    addNewCardEmpty();
    setForms([...getListCards()]);
  }

  function managementTitleList(input: string) {
    setTitleList(input);
    const listIsEmpty = validListTitle(input);
    if (listIsEmpty) {
      setVisible(false);
    }
  }

  async function submitForm() {
    const listEmpty = validListTitle(titleList);

    if (!listEmpty) {
      setVisible(true);
      return;
    }

    const submit = [
      {
        title: titleList,
        cards: getListCards(),
      },
    ];
    setEnableScreen({enable: true, closed: false});
    // await insert(submit, '/123456789/lists').finally(function () {
    //   setPlaceholder('TITULO DA LISTA');
    //   clearList();
    //   setForms([...getListCards()]);
    //   setTitleList('');
    // });
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
            onChangeText={(valueInput: string) => {
              managementTitleList(valueInput);
            }}
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
            onPress={() => {
              submitForm();
            }}>
            <Done />
          </Pressable>
        </Box>
      </Flex>
      <AlertPopover
        visible={visible}
        text={'Digite o titulo da lista'}
        setVisible={setVisible}
      />

      <Box padding="2" flex={1} justifyContent="flex-start" alignItems="center">
        <FlatList
          data={forms}
          renderItem={({item}) => {
            return <Form cardItem={item} cards={forms} setForms={setForms} />;
          }}
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
      <ComponentActionSheet
        enable={enableScreen.enable}
        closed={enableScreen.closed}
      />
    </>
  );
}

export default CreateLists;
