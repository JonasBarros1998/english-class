import React, {useState, useCallback, useEffect} from 'react';
import {Pressable} from 'react-native';
import {Box, Input, Flex, Text} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import {userList as typeUserList} from '@global/types/userList';
import Done from '@components/Svgs/Done';
import AlertPopover from '@components/Alerts/AlertPopover';
import {updateListDetails} from './useCase/updateList';
import {validListTitle} from './useCase/validListTitle';
import {updateAllCards} from '@pubsub/reducers/listOfCards';
import Cards from '@components/Cards/AnimatedCards/Cards';
import {countTotalOfCards} from './useCase/countQuantityTotalOfCards';
import {theUserCanToEditTheList} from './useCase/theUserCanToEditTheList';

type param = {
  userList: typeUserList;
  navigation: any;
};

function ListDetails(props: param) {
  const [titleList, setTitleList] = useState(props.userList.listTitle);
  const [visible, setVisible] = useState(false);
  const [theUserCanToEditListHis, setTheUserCanToEditListHis] =
    useState<boolean>();

  const datasOfList = useSelector(({listOfCards}: any) => listOfCards);
  const dispatch = useDispatch();

  async function updateUserList() {
    if (visible === true) {
      return;
    }

    const copyObjUserList = Object.assign({}, props.userList);
    copyObjUserList.cards = datasOfList.cards;
    const listOfUser = countTotalOfCards(copyObjUserList);
    await updateListDetails(listOfUser);
    props.navigation.navigate('homePage', {
      screen: 'homePage',
    });
    clearComponent();
  }

  const updateCards = useCallback(async () => {
    dispatch(updateAllCards({type: 'cards', cards: props.userList.cards}));
    const editList = await theUserCanToEditTheList(props.userList);
    setTheUserCanToEditListHis(editList);
  }, [dispatch, props.userList]);

  useEffect(() => {
    updateCards();
  }, [updateCards]);

  function updateListOfTitle(input: string) {
    setTitleList(input);
    const listIsEmpty = validListTitle(input);
    if (listIsEmpty === false) {
      setVisible(true);
      return;
    }
    setVisible(false);
  }

  function clearComponent() {
    setVisible(false);
  }

  return (
    <>
      {theUserCanToEditListHis === true ? (
        <Flex
          bg="#312E81"
          display="flex"
          width="100%"
          direction="row"
          height="53px"
          paddingTop={2}
          paddingBottom={2}
          justifyContent="space-between">
          <Box width="91%">
            <Input
              paddingTop={3}
              value={titleList}
              onChangeText={(input: string) => updateListOfTitle(input)}
              autoCorrect={false}
              variant="underlined"
              borderBottomColor="#312E81"
              fontSize={16}
              placeholderTextColor="#FFF"
              fontWeight={600}
              color="#FFF"
              maxLength={30}
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
                updateUserList();
              }}>
              <Done />
            </Pressable>
          </Box>
        </Flex>
      ) : (
        <Flex
          bg="#312E81"
          display="flex"
          width="100%"
          direction="row"
          height="53px"
          paddingTop={2}
          paddingBottom={2}
          justifyContent="space-between">
          <Box width="91%">
            <Text
              color="#FFF"
              paddingTop={1}
              fontSize={18}
              fontWeight={600}
              paddingLeft={3}>
              {titleList}
            </Text>
          </Box>
        </Flex>
      )}
      <AlertPopover
        visible={visible}
        text={'Digite o titulo da lista'}
        setVisible={setVisible}
      />
      <Cards isDisableButton={theUserCanToEditListHis} />
    </>
  );
}

export default ListDetails;
