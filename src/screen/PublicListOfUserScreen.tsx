import React from 'react';
import {Box, Text} from 'native-base';
import PublicListOfUser from '@components/Lists/publicLists/PublicListOfUser';
type param = {
  navigation: any;
};

function PublicListOfUserScreen(props: param) {
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
          Minhas Listas Públicas
        </Text>
      </Box>
      <Box bg="#e7e5e4" flex={1}>
        <PublicListOfUser navigation={props.navigation} />
      </Box>
    </>
  );
}

export default PublicListOfUserScreen;
