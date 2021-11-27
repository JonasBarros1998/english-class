import React, {useState} from 'react';
import {Box, Button, HStack, Text, View} from 'native-base';

import PrivateLists from '@components/Lists/lists/privateLists';
import FavouriteList from '@components/Lists/lists/favouriteLists';

import {changeComponents} from './useCase/changeComponents';

function UserListScreen({route, navigation}: any) {
  const [attComponents, setAttComponents] = useState(
    changeComponents(route.params.screen),
  );

  function loadComponentList() {
    if (attComponents.component.loadComponentPrivateList === true) {
      return <PrivateLists navigation={navigation} />;
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
            onPress={() => setAttComponents(changeComponents('privateList'))}>
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
            onPress={() => setAttComponents(changeComponents('favouriteList'))}>
            <Text fontSize={16} color="#FFF" bold>
              Listas favoritas
            </Text>
          </Button>
        </HStack>
        <View>{loadComponentList()}</View>
      </Box>
    </>
  );
}

export default UserListScreen;
