import React, {useState} from 'react';
import {Button, Text} from 'native-base';
import Modal from './Modal';

function Logout() {
  const [openModal, setOpenModal] = useState(false);

  function changeState(state: boolean) {
    setOpenModal(state);
  }
  return (
    <>
      <Button
        variant="unstyled"
        bg="danger.600"
        w="30%"
        marginTop={'16'}
        onPress={() => setOpenModal(true)}>
        <Text
          color="white"
          fontSize={'md'}
          fontWeight={'medium'}
          textTransform={'uppercase'}>
          Sair
        </Text>
      </Button>

      <Modal
        openModal={openModal}
        changeStateOfAnotherComponent={changeState}
      />
    </>
  );
}

export default Logout;
