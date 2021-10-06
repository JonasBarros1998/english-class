import React from 'react';
import {Button} from 'native-base';
import IconAdd from '../Svgs/Add';

function ButtonAddNewCard() {
  return (
    <Button
      borderRadius={100}
      width="53px"
      height="53px"
      variant="unstyled"
      bg="#312E81">
      <IconAdd />
    </Button>
  );
}

export default ButtonAddNewCard;
