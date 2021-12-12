import React, {useState} from 'react';
import {FlatList, Pressable, Animated, PanResponder} from 'react-native';

import {
  Input,
  Box,
  Center,
  Button,
  Flex,
  View,
  useDisclose,
  Actionsheet,
  Switch,
  Text,
} from 'native-base';

import IconAdd from '../Svgs/Add';
import Done from '../Svgs/Done';
import {
  addNewCardEmpty,
  updateForm,
  getListCards,
  clearList,
  deleteItem,
} from './useCase/cards';
import AlertPopover from './AlertDialog';
import {validListTitle} from '../Save/validListTitle';
import {WIDTH_SCREEN as widthScreen} from './constants';
import {saveUserList} from './useCase/saveUserList';
import {managerPropertiesInUserList} from './useCase/addNewProperties';
import {createCard} from '@global/types/cards';
import {useDispatch} from 'react-redux';
import {publicLists} from '@pubsub/lists';

type typeInput = 'word' | 'translation' | 'context';

function Form({cardItem, setForms}: any) {
  const [word, setWords] = useState('');
  const [translation, setTranslation] = useState('');
  const [context, setContext] = useState('');

  function changeInput(input: string, item: createCard, inputType: typeInput) {
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
  const {isOpen, onClose, onOpen} = useDisclose();
  const [changeSwitch, setChangeSwitch] = useState(true);
  const [isPublicList, setIsPublicList] = useState('Apenas eu');

  const dispatch = useDispatch();

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

  async function validTitleList() {
    const listEmpty = validListTitle(titleList);
    if (!listEmpty) {
      setVisible(true);
      return;
    }
    onOpen();
  }

  function clearComponent() {
    setPlaceholder('TITULO DA LISTA');
    clearList();
    setForms([...getListCards()]);
    setTitleList('');
    setChangeSwitch(true);
    setIsPublicList('Apenas eu');
    onClose();
  }

  async function submitForm() {
    const datas = await managerPropertiesInUserList(getListCards(), titleList);

    await saveUserList(changeSwitch, datas);
    if (changeSwitch === false) {
      dispatch(publicLists(datas));
    }

    clearComponent();
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
              validTitleList();
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
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" pb={5} justifyContent="center">
            <Text fontSize="18" color="gray.500" textAlign="center">
              Quem poderá visualizar sua lista
            </Text>
          </Box>

          <Actionsheet.Item>
            <Box flexDirection="row" w="100%">
              <Box w="50%">
                <Text color="black" fontSize="16" bold textAlign="left">
                  {isPublicList}
                </Text>
              </Box>

              <Box w="50%">
                <Switch
                  onThumbColor="indigo.500"
                  onTrackColor="indigo.300"
                  size="lg"
                  isChecked={changeSwitch}
                  onToggle={() => {
                    setChangeSwitch(!changeSwitch);
                    if (isPublicList === 'Apenas eu') {
                      setIsPublicList('Todos');
                    } else {
                      setIsPublicList('Apenas eu');
                    }
                  }}
                />
              </Box>
            </Box>
          </Actionsheet.Item>
          <Actionsheet.Item w="100%">
            <Box justifyContent="center" flexDirection="row">
              <Button
                w="100%"
                backgroundColor="#312E81"
                onPress={() => {
                  submitForm();
                }}>
                Prosseguir
              </Button>
            </Box>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}

export default CreateLists;
