import React from 'react';

import {Actionsheet, Box, Text, Button} from 'native-base';
type params = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

function ComponentActionSheet({isOpen, onClose, onOpen}: params) {
  return (
    <>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text
              fontSize="16"
              color="gray.500"
              _dark={{
                color: 'gray.300',
              }}>
              Albums
            </Text>
          </Box>
          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item>Share</Actionsheet.Item>
          <Actionsheet.Item>
            <Button>Click me</Button>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}

export default ComponentActionSheet;
