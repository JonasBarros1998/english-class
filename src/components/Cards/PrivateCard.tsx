/* eslint-disable radix */
import React from 'react';

import {Box, Center, Text} from 'native-base';
import {userList} from '@global/types/userList';

function PrivateCard(props: {card: userList}) {
  function changeText(quantity: number) {
    if (quantity > 1) {
      return 'palavras';
    }
    return 'palavra';
  }

  return (
    <Center alignItems="center" testID="publicCard">
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
          {props.card.listTitle}
        </Text>

        <Text
          fontFamily="body"
          fontWeight={600}
          fontSize={17}
          pb={1}
          testID="quantityWords">
          {props.card.quantity} {changeText(props.card.quantity as number)}
        </Text>
      </Box>
    </Center>
  );
}

export default PrivateCard;
