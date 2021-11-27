import React, {useState} from 'react';

import {Actionsheet, Box, Text, Switch, Button} from 'native-base';
type params = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

/**
 *
 * @param {boolean} isOpen
 * @param {Function} onClose
 * @param {Function} onOpen
 *  example The params inOpen, onClose and onOpen are the function useDisclose
 * ```
 * import {useDisclose} from 'native-base';
 *
 * const {isOpen, onClose, onOpen} = useDisclose();
 * <ComponentActionSheet isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
 * ```
 */
function ComponentActionSheet({isOpen, onClose, onOpen}: params) {
  const [changeSwitch, setChangeSwitch] = useState(false);
  const [isPublicList, setIsPublicList] = useState('Todos');

  return (
    <>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" pb={5} justifyContent="center">
            <Text fontSize="18" color="gray.500" textAlign="center">
              Quem poderá visualizar sua lista
            </Text>
          </Box>

          <Actionsheet.Item>
            <Box flexDirection="row" w="100%">
              <Box w="50%">
                <Text color="black" fontSize="16" bold textAlign="left">
                  {isPublicList}
                </Text>
              </Box>

              <Box w="50%">
                <Switch
                  onThumbColor="indigo.500"
                  onTrackColor="indigo.300"
                  size="lg"
                  isChecked={changeSwitch}
                  onToggle={() => {
                    if (changeSwitch === false) {
                      setIsPublicList('Apenas eu');
                      setChangeSwitch(true);
                      return;
                    }
                    setIsPublicList('Todos');
                    setChangeSwitch(false);
                  }}
                />
              </Box>
            </Box>
          </Actionsheet.Item>
          <Actionsheet.Item w="100%">
            <Box justifyContent="center" flexDirection="row">
              <Button w="100%" backgroundColor="#312E81">
                Prosseguir
              </Button>
            </Box>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}

export default ComponentActionSheet;
