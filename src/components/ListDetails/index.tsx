import React from 'react';
import {Pressable} from 'react-native';
import {Box, Input, Flex} from 'native-base';
import {userList as typeUserList} from '@global/types/userList';
import CreateCards from '@components/Cards/AnimatedCards/createCards';
import {updateCardList, getListCards} from '@components/Cards/useCase/cards';
import Done from '@components/Svgs/Done';
import {updateListDetails} from './useCase/updateList';

function ListDetails(userList: typeUserList) {
  updateCardList(userList.cards);

  function updateList() {
    const copyObjUserList = Object.assign({}, userList);
    copyObjUserList.cards = getListCards();
    updateListDetails(copyObjUserList);
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
            // onPressIn={() => {}}
            value={userList.listTitle}
            // onChangeText={(valueInput: string) => {// managementTitleList(valueInput);}}
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
              updateList();
            }}>
            <Done />
          </Pressable>
        </Box>
      </Flex>
      <CreateCards userList={userList.cards} />
    </>
  );
}

export default ListDetails;
