import React from 'react';
import {Button} from 'native-base';
import IconAdd from '@components/Svgs/Add';
import {addNewCardEmpty} from '../useCase/cards';

function CreateCardButton(props: any) {
  function addNewCard() {
    addNewCardEmpty();
    props.updateCard();
  }

  return (
    <Button
      borderRadius={100}
      onPress={() => addNewCard()}
      width="53px"
      height="53px"
      variant="unstyled"
      bg="#312E81">
      <IconAdd />
    </Button>
  );
}

export default CreateCardButton;
