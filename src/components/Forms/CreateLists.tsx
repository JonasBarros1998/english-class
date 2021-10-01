import React from "react";

import { Input, Box } from 'native-base';

import ButtonAddNewCard from './AddNewCard';

function CreateLists() {
  return (
    <>
    <Box 
      width="100%" 
      flex={1}
      justifyContent="flex-start" 
      alignItems="center">
      <Box
        margin={2}
        bg="#fff"
        width="95%"
        rounded="lg"
        padding="3"
        shadow={1}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
      >

        <Input
          variant="underlined"
          placeholder="Palavra"
          fontSize={16}
          placeholderTextColor="#78716c"
          width="100%"
          fontWeight={600}
          _focus={{
            borderBottomColor: '#000'
          }} />

        <Input
          variant="underlined"
          placeholder="Tradução"
          fontSize={16}
          placeholderTextColor="#78716c"
          width="100%"
          fontWeight={600}
          _focus={{
            borderBottomColor: '#000'
          }}
           />

        <Input
          variant="underlined"
          placeholder="Contexto"
          fontSize={16}
          placeholderTextColor="#78716c"
          width="100%"
          fontWeight={600}
          _focus={{
            borderBottomColor: '#000'
          }} />
      </Box>
      <ButtonAddNewCard />
    </Box>
    </>
  );
}

export default CreateLists;
