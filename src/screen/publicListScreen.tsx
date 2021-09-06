import React from 'react';
import {Box} from 'native-base';

import PublicLists from '../lists/publicLists';

import MainMenu from '../components/MainMenu';

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
