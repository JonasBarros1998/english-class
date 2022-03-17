import React, {useState} from 'react';
import {Button, Text, Modal, Box} from 'native-base';

export default function ModalComponent() {
  const [openComponent, setOpenComponent] = useState(true);

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
                marginBottom={'1.5'}
                backgroundColor={'#312E81'}
                height={'45px'}>
                <Text color={'white'} fontSize={'18px'} bold>
                  Sim, quero sair
                </Text>
              </Button>
              <Button
                backgroundColor={'transparent'}
                colorScheme={'primary'}
                onPress={() => setOpenComponent(!openComponent)}>
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
