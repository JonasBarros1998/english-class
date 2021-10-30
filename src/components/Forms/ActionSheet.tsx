import React, {useState, useEffect} from 'react';

import {useDisclose, Actionsheet, Box, Text, Button} from 'native-base';
type params = {
  enable: boolean;
  closed: boolean;
};

function ComponentActionSheet({enable, closed}: params) {
  const {onClose, onOpen, isOpen} = useDisclose();
  const [cc, setCc] = useState(enable);
  useEffect(() => {
    setCc(enable);
    console.log(cc, enable);
  }, [enable, cc]);
  return (
    <>
      <Actionsheet isOpen={cc} onClose={onClose}>
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
            <Button onPress={() => setCc(false)}>Click me</Button>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}

export default ComponentActionSheet;
