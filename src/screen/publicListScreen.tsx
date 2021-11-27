import React from 'react';
import {Box, Text} from 'native-base';

import PublicLists from '@components/Lists/lists/publicLists';

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
        <PublicLists />
      </Box>
    </>
  );
}

/**
 * bg="#312E81"
        display="flex"
        width="100%"
        direction="row"
        paddingTop={2}
        paddingBottom={2}
        justifyContent="space-between"
 */
export default PublicListScreen;
