import React, {useState, useEffect} from 'react';
import {Pressable} from 'react-native';

import {Box, Center, Text} from 'native-base';

type paramsListDetails = {
  word: string;
  translation: string;
  phrase: string;
};

function ListDetails({word, translation, phrase}: paramsListDetails) {
  // bgCard = backgroud color card
  const [bgCard, setBgCard] = useState('white');

  const [userPhrase, setUserPhrase] = useState(phrase);

  useEffect(() => {
    if (phrase.length > 65) {
      const textFormatted = phrase.slice(0, 64);
      setUserPhrase(textFormatted.padEnd(67, '...'));
      return;
    }
    return setUserPhrase(phrase);
  }, [phrase]);

  const onPressButton = () => {
    setBgCard('#F2F2F2');
    setUserPhrase(phrase);
  };

  const outPressButton = () => setBgCard('white');

  return (
    <Pressable
      onPress={() => onPressButton()}
      onPressOut={() => outPressButton()}>
      <Center alignItems="flex-start">
        <Box
          bgColor={bgCard}
          shadow={2}
          rounded="lg"
          maxWidth="90%"
          width="90%"
          mt={3}
          mb={2}
          p={2}>
          <Text fontFamily="body" fontWeight={800} fontSize={19} pb={1}>
            {word}
          </Text>

          <Text fontFamily="body" fontWeight={600} fontSize={17} pb={1}>
            {translation}
          </Text>

          <Text fontFamily="body" fontWeight={600} fontSize={17}>
            {userPhrase}
          </Text>
        </Box>
      </Center>
    </Pressable>
  );
}

export default ListDetails;
