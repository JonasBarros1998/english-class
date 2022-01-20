import React from 'react';
import {Fab} from 'native-base';
import IconAdd from '@components/Svgs/Add';

function CreateCardButton(props: any) {
  function newCard() {
    props.updateCard();
  }

  return (
    <Fab
      bg="#312E81"
      position="absolute"
      size="sm"
      variant="unstyled"
      marginBottom={'10'}
      onPress={() => newCard()}
      icon={<IconAdd />}
    />
  );
}

export default CreateCardButton;
