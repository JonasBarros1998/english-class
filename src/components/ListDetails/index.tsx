import React, {useState, useEffect} from 'react';
import {Pressable} from 'react-native';
import {Box, Input, Flex} from 'native-base';
import {userList as typeUserList} from '@global/types/userList';
import Done from '@components/Svgs/Done';
import AlertPopover from '@components/Alerts/AlertPopover';
import {updateListDetails} from './useCase/updateList';
import {validListTitle} from './useCase/validListTitle';
import {updateAllCards} from '@pubsub/reducers/listOfCards';
import {useDispatch} from 'react-redux';
import Cards from '@components/Cards/AnimatedCards/Cards';

type param = {
  userList: typeUserList;
  navigation: any;
};

function ListDetails(params: param) {
  const [titleList, setTitleList] = useState(params.userList.listTitle);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  async function updateUserList() {
    if (visible === true) {
      return;
    }

    const copyObjUserList = Object.assign({}, params.userList);
    await updateListDetails(copyObjUserList);
    params.navigation.navigate('homePage', {
      screen: 'homePage',
    });
    clearComponent();
  }

  useEffect(() => {
    dispatch(updateAllCards({type: 'cards', cards: params.userList.cards}));
  });

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
      <Flex
        bg="#312E81"
        display="flex"
        width="100%"
        direction="row"
        height="53px"
        paddingTop={2}
        paddingBottom={2}
        justifyContent="space-between">
        <Box width="91%" backgroundColor="#312E81">
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
      <AlertPopover
        visible={visible}
        text={'Digite o titulo da lista'}
        setVisible={setVisible}
      />
      <Cards />
    </>
  );
}

export default ListDetails;
