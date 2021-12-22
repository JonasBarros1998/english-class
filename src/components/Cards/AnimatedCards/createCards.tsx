import React from 'react';

import {createCard, inputName} from '@global/types/cards';
import Form from './Form';
import AnimatedCard from './Animated';

// import {
//   deleteItem,
//   getListCards,
//   updateForm,
//   addNewCardEmpty,
// } from '../useCase/cards';

function CreateCards(card: createCard) {
  return (
    <AnimatedCard>
      <Form {...card} />
    </AnimatedCard>
  );
}

export default CreateCards;
