import React, {useState, useEffect} from 'react';
import {Button, Text, Modal, Box} from 'native-base';
import {logoutUser} from '../useCases/logout';

export default function ModalComponent(props: {
  openModal: boolean | undefined;
  changeStateOfAnotherComponent: (state: boolean) => void | undefined;
}) {
  const modal =
    typeof props.openModal === 'undefined' ? false : props.openModal;
  const [openComponent, setOpenComponent] = useState(modal);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    setOpenComponent(modal);
  }, [modal]);

  async function disableButton() {
    setDisable(true);
    await logoutUser();
    setDisable(false);
  }

  return (
    <>
      <Modal isOpen={openComponent} size={'xl'}>
        <Modal.Content>
          <Modal.Header>
            <Text bold fontSize={'23px'}>
              Sair da aplicação?
            </Text>
          </Modal.Header>
          <Modal.Body marginBottom={'20px'}>
            <Text color={'#262626'} fontSize={'19px'}>
              Tem certeza que realmente deseja sair?
            </Text>
          </Modal.Body>
          <Modal.Footer justifyContent={'center'}>
            <Box width={'100%'}>
              <Button
                isDisabled={disable}
                marginBottom={'2'}
                backgroundColor={'#312E81'}
                height={'45px'}
                onPress={() => disableButton()}>
                <Text color={'white'} fontSize={'18px'} bold>
                  Sim, quero sair
                </Text>
              </Button>
              <Button
                backgroundColor={'transparent'}
                colorScheme={'primary'}
                onPress={() => {
                  setOpenComponent(false);
                  props.changeStateOfAnotherComponent(false);
                }}>
                <Text color={'#312E81'} fontSize={'18px'} bold>
                  Voltar
                </Text>
              </Button>
            </Box>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}
