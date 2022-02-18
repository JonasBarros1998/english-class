import React, {useRef, Dispatch, SetStateAction} from 'react';
import {Center, Button, AlertDialog, Box} from 'native-base';

type param = {
  title: string;
  textBtnCancel: string;
  textBtnConfirmation: string;
  body: string;
  isOpen: boolean;
  onClose: () => void;
  btnConfirmation: () => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function AlertDialogComponent(props: param) {
  const cancelRef = useRef(null);

  return (
    <Center>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={props.isOpen}
        onClose={props.onClose}>
        <AlertDialog.Content>
          <AlertDialog.Header>{props.title}</AlertDialog.Header>
          <AlertDialog.Body>{props.body}</AlertDialog.Body>
          <AlertDialog.Footer>
            <Box width={'100%'} marginBottom={'1.5'}>
              <Button
                height="12"
                variant="solid"
                bgColor="#0284c7"
                onPress={props.onClose}
                ref={cancelRef}>
                {props.textBtnCancel}
              </Button>
            </Box>
            <Box width={'100%'} marginTop={'1.5'}>
              <Button
                colorScheme="danger"
                onPress={props.btnConfirmation}
                height="12">
                {props.textBtnConfirmation}
              </Button>
            </Box>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  );
}

export default AlertDialogComponent;
