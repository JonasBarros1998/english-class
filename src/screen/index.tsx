import React from 'react';
import {Pressable} from 'react-native';

import {Box, HStack, Text, Center} from 'native-base';

import OneCardPrivateList from '@components/Lists/privateLists/oneCard';
import OneCardFavouriteList from '@components/Lists/favouriteLists/oneCard';

function MainPage({navigation}: any) {
  return (
    <Box bg="#e7e5e4" flex={1}>
      <Box>
        <Center marginTop={4}>
          <HStack justifyContent="space-between" width="90%">
            <Text fontSize={16}>Minhas Listas</Text>
            <Pressable
              onPress={() =>
                navigation.navigate('userList', {screen: 'privateList'})
              }>
              <Text color="#0ea5e9" fontSize={16} bold>
                Ver todas
              </Text>
            </Pressable>
          </HStack>
        </Center>
        <OneCardPrivateList />
      </Box>

      <Box>
        <Center marginTop={4}>
          <HStack justifyContent="space-between" width="90%">
            <Text fontSize={16}>Listas favoritas</Text>
            <Pressable
              onPress={() =>
                navigation.navigate('userList', {screen: 'favouriteList'})
              }>
              <Text color="#0ea5e9" fontSize={16} bold>
                Ver todas
              </Text>
            </Pressable>
          </HStack>
        </Center>
        <OneCardFavouriteList />
      </Box>
    </Box>
  );
}

export default MainPage;
