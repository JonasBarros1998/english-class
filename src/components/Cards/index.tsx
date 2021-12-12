import React from 'react';
import {Center, Box, Text, HStack, Avatar} from 'native-base';
import {userList} from '@global/types/userList';

export function Card(card: userList) {
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
          {card.listTitle}
        </Text>

        <Text
          fontFamily="body"
          fontWeight={600}
          fontSize={17}
          pb={1}
          testID="quantityWords">
          {card.quantity} {changeText(card.quantity)}
        </Text>

        <HStack
          display="flex"
          alignItems="flex-end"
          justifyContent="space-between">
          <Text fontFamily="body" fontWeight={600} fontSize={17}>
            criada por: {card.user.userName}
          </Text>

          <Avatar
            size="sm"
            source={{
              uri: card.user.photoUrl,
            }}
          />
        </HStack>
      </Box>
    </Center>
  );
}

export default Card;
