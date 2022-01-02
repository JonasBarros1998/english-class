import React from 'react';
import {Button} from 'native-base';
import IconAdd from '@components/Svgs/Add';

function CreateCardButton(props: any) {
  function newCard() {
    props.updateCard();
  }

  return (
    <Button
      borderRadius={100}
      onPress={() => newCard()}
      width="53px"
      height="53px"
      variant="unstyled"
      bg="#312E81">
      <IconAdd />
    </Button>
  );
}

export default CreateCardButton;
