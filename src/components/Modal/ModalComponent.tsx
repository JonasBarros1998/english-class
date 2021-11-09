import React, {useEffect, useState} from 'react';
import {Modal, Button, ScrollView, Text} from 'native-base';

type param = {
  visible: boolean;
  /*setmodalClosed: Function;*/
  size?: 'md' | 'xs' | 'sm' | 'lg' | 'xl' | 'full';
  content?: string;
};

function ModalComponent({visible, /*setmodalClosed*/ size, content}: param) {
  const [modalClose, setModalClosed] = useState(visible);
  /*
  useEffect(() => {
    if (modalClose === true) {
      setModalClosed(true);
      console.log(visible, modalClose);
      return;
    }
    setModalClosed(false);
  }, [modalClose, visible]);*/

  return (
    <Modal isOpen={modalClose} onClose={setModalClosed} size={size}>
      <Modal.Content maxH="212">
        <Modal.CloseButton />
        <Modal.Header>Erro</Modal.Header>
        <Modal.Body>
          <ScrollView>
            <Text>{content}</Text>
          </ScrollView>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              variant="ghost"
              colorScheme="blueGray"
              onPress={() => {
                setModalClosed(false);
              }}>
              Fechar
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}

export default ModalComponent;
