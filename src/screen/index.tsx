import React from 'react';
import {Pressable} from 'react-native';
import {Box, HStack, Text, Center} from 'native-base';
import LoadOneCardPrivateList from '@components/Lists/privateLists/LoadOneCardPrivateList';
import PublicListOnMainPage from '@components/Lists/publicLists/PublicListInMainPage';

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
        <LoadOneCardPrivateList navigation={navigation} />
      </Box>

      <Box paddingBottom={'32'}>
        <Center marginTop={4}>
          <HStack justifyContent="space-between" width="90%">
            <Text fontSize={16}>Minhas Listas Públicas</Text>
            <Pressable
              onPress={() =>
                navigation.navigate('publicListOfUser', {
                  screen: 'publicListOfUser',
                })
              }>
              <Text color="#0ea5e9" fontSize={16} bold>
                Ver todas
              </Text>
            </Pressable>
          </HStack>
        </Center>
        <PublicListOnMainPage navigation={navigation} />
      </Box>
    </Box>
  );
}

export default MainPage;
