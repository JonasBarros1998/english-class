import React from 'react';

import {Box} from 'native-base';

import MainMenu from '../components/MainMenu';

function MainPage({navigation}: any) {
  return (
    <Box bg="#e7e5e4" flex={1}>
      <Box justifyContent="flex-end" flex={1}>
        <MainMenu navigation={navigation} />
      </Box>
    </Box>
  );
}

export default MainPage;
