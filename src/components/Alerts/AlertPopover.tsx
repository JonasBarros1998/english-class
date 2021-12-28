import React from 'react';
import {
  Alert,
  HStack,
  Text,
  CloseIcon,
  IconButton,
  VStack,
  Collapse,
} from 'native-base';

type params = {
  visible: boolean;
  setVisible: Function;
  text: string;
};

function AlertPopover(params: params) {
  return (
    <Collapse isOpen={params.visible}>
      <Alert w="100%" status="error">
        <VStack space={2} flexShrink={1} w="100%">
          <HStack flexShrink={1} space={2} justifyContent="space-between">
            <HStack space={2} flexShrink={1}>
              <Alert.Icon mt="1" />
              <Text fontSize="md" color="coolGray.800">
                {params.text}
              </Text>
            </HStack>
            <IconButton
              variant="unstyled"
              onPress={() => {
                params.setVisible(false);
              }}
              icon={<CloseIcon size="3" color="coolGray.600" />}
            />
          </HStack>
        </VStack>
      </Alert>
    </Collapse>
  );
}

export default AlertPopover;
