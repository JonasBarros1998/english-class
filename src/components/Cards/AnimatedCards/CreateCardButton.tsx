import React from 'react';
import {Button} from 'native-base';
import IconAdd from '@components/Svgs/Add';
import {addNewCardEmpty, getListCards} from '../useCase/cards';
import {useDispatch} from 'react-redux';
import {addCardEmpty} from '@pubsub/reducers/cards';

function CreateCardButton() {
  const dispatch = useDispatch();

  function addNewCard() {
    dispatch(addCardEmpty(addNewCardEmpty()));
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
