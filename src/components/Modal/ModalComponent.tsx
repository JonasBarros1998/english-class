import React, {useState, useCallback, useEffect} from 'react';
import {Modal, Button, ScrollView, Text} from 'native-base';
import {useDispatch} from 'react-redux';
// import {onOff} from '@pubsub/onOffSlice';
import {useSelector} from 'react-redux';
import {onOff} from '@pubsub/onOffSlice';

type param = {
  visible: boolean;
  size?: 'md' | 'xs' | 'sm' | 'lg' | 'xl' | 'full';
  content?: string;
};

type status = {
  onOff: {
    status: boolean;
    message: string;
  }[];
};

function ModalComponent() {
  const [closeModal, setModalClosed] = useState(false);
  const [messageModal, setMessageModal] = useState('');
  const dispatch = useDispatch();

  const statusModal = useSelector((state: status) => state.onOff);

  const statusModalCallback = useCallback(() => {
    const [{status, message}] = statusModal;
    setModalClosed(() => status);
    setMessageModal(() => message);
  }, [statusModal]);

  useEffect(() => {
    statusModalCallback();
  });
  return (
    <Modal isOpen={closeModal} onClose={setModalClosed}>
      <Modal.Content maxH="212">
        <Modal.Header>Erro</Modal.Header>
        <Modal.Body>
          <ScrollView>
            <Text>{messageModal}</Text>
          </ScrollView>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              width={'100%'}
              variant="solid"
              colorScheme="blueGray"
              onPress={() => {
                dispatch(onOff({status: false, message: ''}));
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
