import React from 'react';
import {Box} from 'native-base';

import PublicLists from '@lists/publicLists';

function PublicListScreen({navigation}: any) {
  return (
    <>
      <Box bg="#e7e5e4" flex={1}>
        <PublicLists />
      </Box>
    </>
  );
}

export default PublicListScreen;
