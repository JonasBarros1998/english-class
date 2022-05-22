import React from 'react';
import {Box, HStack, Text} from 'native-base';
import PublicLists from '@components/Lists/publicLists/PublicLists';
import SearchInput from '@modules/lists/components/searchInput';
import Search from '@modules/lists/components/Search';

function PublicListScreen({navigation}: any) {
  return (
    <>
      <HStack
        bg="#312E81"
        display="flex"
        width="100%"
        paddingTop={3}
        paddingLeft={4}
        paddingBottom={3}
        height="56px"
        justifyContent="space-between">
        <Text fontSize={20} color="#fff" paddingLeft={4} bold>
          Listas Públicas
        </Text>
        <Search />
      </HStack>
      <SearchInput />
      <Box bg="#e7e5e4" flex={1}>
        <PublicLists route={navigation} />
      </Box>
    </>
  );
}

export default PublicListScreen;
