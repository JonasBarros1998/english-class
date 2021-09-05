import React from 'react';
import {Box, HStack, Center} from 'native-base';
import IConHome from '../Svgs/Home';
import IconList from '../Svgs/IconList';
import IconUser from '../Svgs/IconUser';

function MainMenu() {
  return (
    <Box flex={1} bg="white" safeAreaTop>
      <Center flex={1} />
      <HStack
        paddingLeft="2"
        paddingRight="2"
        bgColor="#312e81"
        alignItems="center"
        safeAreaBottom
        height="53px">
        <IConHome />
        <IconList />
        <IconUser />
      </HStack>
    </Box>
  );
}

export default MainMenu;
