import React, {useState} from 'react';
import {Box, Button, HStack, Text, View} from 'native-base';

import PrivateList from '@components/Lists/privateLists/PrivateList';
import FavouriteList from '@components/Lists/favouriteLists';

import {changeComponents} from './useCase/changeComponents';

function PrivateListScreen({route, navigation}: any) {
  const [attComponents, setAttComponents] = useState(
    changeComponents(route.params.screen),
  );

  function loadComponentList() {
    if (attComponents.component.loadComponentPrivateList === true) {
      return <PrivateList navigation={navigation} />;
    }

    // return <FavouriteList />;
  }

  return (
    <>
      <Box bg="#e7e5e4" flex={1}>
        <HStack bg="#312E81" height={60}>
          <Box
            bg="#312E81"
            display="flex"
            width="100%"
            paddingTop={3}
            paddingBottom={3}
            paddingLeft={4}
            height="56px"
            justifyContent="space-between">
            <Text fontSize={20} color="#fff" bold>
              Minhas Listas
            </Text>
          </Box>

          {/**
          <Button
            bgColor="#312E81"
            borderBottomColor={attComponents.style.colorBorderBtnMyList}
            borderBottomWidth={5}
            borderRadius={0}
            testID="btn-my-list"
            onPress={() => setAttComponents(changeComponents('privateList'))}>
            <Text fontSize={16} color="#FFF" bold>
              Minhas listas
            </Text>
          </Button>
          */}

          {/**
          <Button
            testID="favourite-list"
            bgColor="#312E81"
            borderBottomWidth={5}
            borderRadius={0}
            borderBottomColor={attComponents.style.colorBorderBtnfavouritList}
            onPress={() => setAttComponents(changeComponents('favouriteList'))}>
            <Text fontSize={16} color="#FFF" bold>
              Listas favoritas
            </Text>
          </Button>
          */}
        </HStack>
        <View>{loadComponentList()}</View>
      </Box>
    </>
  );
}

export default PrivateListScreen;
