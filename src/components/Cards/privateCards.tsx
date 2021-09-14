/* eslint-disable radix */
import React from 'react';

import {Box, Center, Text} from 'native-base';

type params = {
  name: string;
  quantityWords: string;
  idioma: string;
};

function PrivateCards(card: params) {
  function changeText(quantity: string) {
    if (parseInt(quantity) > 1) {
      return 'palavras';
    }
    return 'palavra';
  }

  return (
    <Center alignItems="flex-start" testID="publicCard">
      <Box
        bgColor="white"
        shadow={1}
        rounded="lg"
        maxWidth="90%"
        width="90%"
        mt={3}
        mb={2}
        p={2}>
        <Text fontFamily="body" fontWeight={600} fontSize={19} pb={1} bold>
          {card.name}
        </Text>

        <Text
          fontFamily="body"
          fontWeight={600}
          fontSize={17}
          pb={1}
          testID="quantityWords">
          {card.quantityWords} {changeText(card.quantityWords)}
        </Text>

        <Text fontFamily="body" fontWeight={600} fontSize={17}>
          {card.idioma}
        </Text>
      </Box>
    </Center>
  );
}

export default PrivateCards;
