import React from 'react';
import {Box} from 'native-base';

import MainMenu from '@components/MainMenu';

import PublicLists from '@lists/publicLists';


function PublicListScreen({navigation}: any) {
  return (
    <>
      <Box bg="#e7e5e4" flex={1}>
        <PublicLists />
        <Box justifyContent="flex-end" flex={1}>
          <MainMenu navigation={navigation} />
        </Box>
      </Box>
    </>
  );
}

export default PublicListScreen;
