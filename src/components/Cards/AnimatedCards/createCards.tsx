import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {Center} from 'native-base';
import Form from './Form';
import AnimatedCard from './Animated';
import {userList as typeUserList} from '@global/types/userList';
import {createCard} from '@global/types/cards';
import CreateCardButton from './CreateCardButton';

import {getListCards} from '../useCase/cards';

function CreateCards(userList: typeUserList) {
  const [listCards, setlistCards] = useState<createCard[]>(userList.cards);

  function updateStateComponent() {
    setlistCards(getListCards());
  }

  console.log('JONAS');

  return (
    <>
      <FlatList
        data={listCards}
        renderItem={({item}) => {
          return (
            <AnimatedCard>
              <Form {...item} />
            </AnimatedCard>
          );
        }}
      />
      <Center paddingY="1.5">
        <CreateCardButton updateCard={updateStateComponent} />
      </Center>
    </>
  );
}

export default CreateCards;
