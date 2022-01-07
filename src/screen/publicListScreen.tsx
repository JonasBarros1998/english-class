import React from 'react';
import {Box, Text} from 'native-base';

import PublicLists from '@components/Lists/publicLists/PublicLists';

function PublicListScreen({navigation}: any) {
  return (
    <>
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
          Listas Públicas
        </Text>
      </Box>
      <Box bg="#e7e5e4" flex={1}>
        <PublicLists route={navigation} />
      </Box>
    </>
  );
}

export default PublicListScreen;
