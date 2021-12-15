import React from 'react';
import {FlatList} from 'react-native';

import {Box, Center} from 'native-base';
import {Card} from '@components/Cards/index';
import {createCard} from '@global/types/cards';

function ListDetails(cards: createCard[]) {
  return (
    <Center alignItems="flex-start">
      <Box
        shadow={2}
        rounded="lg"
        maxWidth="90%"
        width="90%"
        mt={3}
        mb={2}
        p={2}>
        <FlatList data={cards} renderItem={({item}) => <Card {...item} />} />
      </Box>
    </Center>
  );
}

export default ListDetails;
