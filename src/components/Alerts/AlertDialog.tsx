import React, {useState, useRef, Dispatch, SetStateAction} from 'react';
import {Center, Button, AlertDialog} from 'native-base';

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
          <AlertDialog.CloseButton />
          <AlertDialog.Header>{props.title}</AlertDialog.Header>
          <AlertDialog.Body>{props.body}</AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={props.onClose}
                ref={cancelRef}>
                {props.textBtnCancel}
              </Button>
              <Button colorScheme="danger" onPress={props.btnConfirmation}>
                {props.textBtnConfirmation}
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  );
}

export default AlertDialogComponent;
