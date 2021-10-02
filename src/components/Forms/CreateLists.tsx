import React, { useState } from "react";
import { FlatList } from "react-native";

import { Input, Box, Center, Button } from "native-base";

import IconAdd from '../Svgs/Add';
import {addNewCardEmpty} from './addNewCard';

function Form() {
  return (
    <Center
      width="100%"
      minWidth="100%"
      marginBottom="5"
      bg="#fff"
      rounded="lg"
      padding="3"
      shadow={1}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}>
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
        }} />

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
    </Center>
  )
}

function CreateLists() {
  const [forms, setForms] = useState(addNewCardEmpty([]));

  return (
    <>
      <Box
        padding="2"
        flex={1}
        justifyContent="flex-start"
        alignItems="center">
        <FlatList
          data={forms}
          renderItem={Form}
          keyExtractor={({id}) => id.toString()}
        />
        <Button borderRadius={100}
          onPress={() => setForms(addNewCardEmpty(forms))}
          width="53px"
          height="53px"
          variant="unstyled"
          bg="#312E81">
          <IconAdd />
        </Button>
      </Box>
    </>
  );
}

export default CreateLists;
