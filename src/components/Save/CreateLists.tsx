import React, {useState} from 'react';
import {FlatList, Pressable /*Animated, PanResponder*/} from 'react-native';

import {
  Input,
  Box,
  Button,
  Flex,
  useDisclose,
  Actionsheet,
  Switch,
  Text,
} from 'native-base';

import IconAdd from '../Svgs/Add';
import Done from '../Svgs/Done';

import AlertPopover from './AlertDialog';
import {validListTitle} from '../Save/validListTitle';
import {saveUserList} from '../Cards/useCase/saveUserList';
import {managerPropertiesInUserList} from '../Cards/useCase/addNewProperties';
import {useDispatch} from 'react-redux';
import {publicLists} from '@pubsub/lists';
import CreateCards from '@components/Cards/AnimatedCards/createCards';

function CreateLists() {
  const [placeholder, setPlaceholder] = useState('TITULO DA LISTA');
  const [titleList, setTitleList] = useState('');
  const [visible, setVisible] = useState(false);
  const {isOpen, onClose, onOpen} = useDisclose();
  const [changeSwitch, setChangeSwitch] = useState(true);
  const [isPublicList, setIsPublicList] = useState('Apenas eu');

  const dispatch = useDispatch();

  function changeState() {
    // addNewCardEmpty();
    // setForms([...getListCards()]);
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
    // clearList();
    //setForms([...getListCards()]);
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
            return <CreateCards cardItem={item} />;
          }}
          keyExtractor={({id}) => id.toString()}
        />
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
