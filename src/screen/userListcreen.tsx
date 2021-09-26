import React, {useState, useEffect} from 'react';
import {Box, Button, HStack, Text, View} from 'native-base';

import PrivateLists from '@lists/privateLists';
import MainMenu from '@components/MainMenu';
import FavouriteList from '@lists/favouriteLists';

import {changeAttComponents} from './useCase/changeComponents';

function UserListScreen({route, navigation}: any) {
  const [attComponents, setAttComponents] = useState(
    changeAttComponents('favouriteList'),
  );

  useEffect(() => {
    if (route.params.screen === 'privateList') {
      setAttComponents(changeAttComponents('privateList'));
      return;
    }
  }, [route.params]);

  function loadComponentList() {
    if (attComponents.component.loadComponentPrivateList === true) {
      return <PrivateLists />;
    }

    return <FavouriteList />;
  }

  return (
    <>
      <Box bg="#e7e5e4" flex={1}>
        <HStack bg="#312E81" height={60}>
          <Button
            bgColor="#312E81"
            borderBottomColor={attComponents.style.colorBorderBtnMyList}
            borderBottomWidth={5}
            borderRadius={0}
            testID="btn-my-list"
            onPress={() =>
              setAttComponents(changeAttComponents('privateList'))
            }>
            <Text fontSize={16} color="#FFF" bold>
              Minhas listas
            </Text>
          </Button>

          <Button
            testID="favourite-list"
            bgColor="#312E81"
            borderBottomWidth={5}
            borderRadius={0}
            borderBottomColor={attComponents.style.colorBorderBtnfavouritList}
            onPress={() =>
              setAttComponents(changeAttComponents('favouriteList'))
            }>
            <Text fontSize={16} color="#FFF" bold>
              Listas favoritas
            </Text>
          </Button>
        </HStack>
        <View>{loadComponentList()}</View>
        <Box justifyContent="flex-end" flex={1}>
          <MainMenu navigation={navigation} />
        </Box>
      </Box>
    </>
  );
}

export default UserListScreen;
