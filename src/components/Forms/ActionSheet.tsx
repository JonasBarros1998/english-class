import React from 'react';

import {Actionsheet, Box, Text, Switch, Button} from 'native-base';
type params = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

/**
 *
 * @param isOpen
 * @param onClose
 * @param onOpen
 *  example The params inOpen, onClose and onOpen are the function useDisclose
 * ```
 * import {useDisclose} from 'native-base';
 *
 * const {isOpen, onClose, onOpen} = useDisclose();
 * <ComponentActionSheet isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
 * ```
 */
function ComponentActionSheet({isOpen, onClose, onOpen}: params) {
  return (
    <>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" pb={5} justifyContent="center">
            <Text fontSize="18" color="gray.500" textAlign="center">
              Sua lista vai ser pública?
            </Text>
          </Box>

          <Actionsheet.Item>
            <Box flexDirection="row" w="100%">
              <Box w="50%">
                <Text color="black" fontSize="16" bold textAlign="left">
                  Sim
                </Text>
              </Box>

              <Box w="50%">
                <Switch
                  onThumbColor="indigo.500"
                  onTrackColor="indigo.300"
                  size="lg"
                />
              </Box>
            </Box>
          </Actionsheet.Item>
          <Actionsheet.Item w="100%">
            <Box justifyContent="center" flexDirection="row">
              <Button w="100%">Proseguir</Button>
            </Box>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}

export default ComponentActionSheet;
