import React, {useState} from 'react';
import {Pressable} from 'react-native';
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
import {useDispatch, useSelector, useStore} from 'react-redux';
import AlertPopover from '@components/Alerts/AlertPopover';
import {publicLists, privateLists} from '@pubsub/lists';
import {clearAllListCards} from '@pubsub/reducers/listOfCards';
import CreateCards from '@components/Cards/AnimatedCards/createCards';
import {userInfo} from '@global/types/userInfo';
import {managerPropertiesInUserList} from '../Cards/useCase/addNewProperties';
import Done from '../Svgs/Done';
import {validListTitle} from '../Save/validListTitle';
import {saveUserList} from '../Cards/useCase/saveUserList';

function CreateLists(props: any) {
  const [placeholder, setPlaceholder] = useState('TITULO DA LISTA');
  const [titleList, setTitleList] = useState('');
  const [visible, setVisible] = useState(false);
  const [changeSwitch, setChangeSwitch] = useState(true);
  const [isPublicList, setIsPublicList] = useState('Apenas eu');
  const {isOpen, onClose, onOpen} = useDisclose();
  const cards = useSelector((state: any) => state.listOfCards);
  const userData = useStore();
  const {userDatasLogged} = userData.getState();
  const castingUserDatasLogged = userDatasLogged.userData as userInfo;

  const dispatch = useDispatch();

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
    setTitleList('');
    setChangeSwitch(true);
    setIsPublicList('Apenas eu');
    onClose();
  }

  async function submitForm() {
    const datas = await managerPropertiesInUserList(
      cards.createCards,
      titleList,
      castingUserDatasLogged,
    );

    saveUserList({
      dispatch: dispatch,
      datas: datas,
      listIsPrivate: changeSwitch,
      userDatas: castingUserDatasLogged,
    }).then(function () {
      if (changeSwitch === false) {
        dispatch(publicLists(datas));
      } else {
        dispatch(privateLists(datas));
      }
    });

    clearComponent();
    dispatch(clearAllListCards('createCards'));
    props.routes.navigate('homePage');
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
            paddingLeft="10px"
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
        setVisible={setVisible}
        text="Digite o titulo da lista"
        visible={visible}
      />
      <CreateCards />
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
