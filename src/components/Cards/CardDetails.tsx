import React, {useEffect, useState} from 'react';

import {Center, Text, Box, FlatList} from 'native-base';
import {select} from '@database/repository/search';

type cards = {
  cards: {
    context: string;
    id: 0;
    translation: string;
    word: string;
  }[];
};

type params = {
  context: string;
  id: number;
  translation: string;
  word: string;
};

type cardItemParam = {
  cardItem: {
    id: string;
    idioma: string;
    name: string;
    quantityWords: number;
  };
};

async function loadUserList(cardItemId: string): Promise<cards> {
  return select(`123456789/lists/${cardItemId}`)
    .then(function (response) {
      console.log('loadUserList >>>', response.toJSON());
      return response.toJSON() as cards;
    })
    .catch(function (error) {
      return Promise.reject(new Error(error));
    });
}

function CardDetails({context, id, translation, word}: params) {
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
          {word}
        </Text>

        <Text
          fontFamily="body"
          fontWeight={600}
          fontSize={17}
          pb={1}
          testID="quantityWords">
          {context}
        </Text>

        <Text fontFamily="body" fontWeight={600} fontSize={17}>
          {translation}
        </Text>
      </Box>
    </Center>
  );
}

const userCard = {
  cards: [
    {
      context: '',
      id: 0,
      translation: '',
      word: '',
    },
  ],
};

function RenderCards({cardItem}: cardItemParam) {
  const [card, setCard] = useState(userCard);
  useEffect(
    function () {
      loadUserList(cardItem.id).then(function (response) {
        setCard(response);
      });
    },
    [cardItem.id],
  );

  return (
    <FlatList
      data={card.cards}
      renderItem={({item}) => {
        return <CardDetails {...item} />;
      }}
      keyExtractor={({id}) => id.toString()}
    />
  );
}

export default RenderCards;
