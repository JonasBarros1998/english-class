import React, {useState, useEffect, useCallback} from 'react';
import {FlatList} from 'react-native';
import {Center} from 'native-base';
import Form from './Form';
import AnimatedCard from './Animated';
import {createCard} from '@global/types/cards';
import CreateCardButton from './CreateCardButton';
import {getListCards} from '../useCase/cards';

type params = {
  userList: createCard[];
};

function CreateCards(props: params) {
  const [listCards, setlistCards] = useState<createCard[]>([]);

  function updateStateComponent() {
    setlistCards([...getListCards()]);
  }

  const updateCards = useCallback(() => {
    setlistCards([...props.userList]);
  }, [setlistCards, props.userList]);

  useEffect(() => {
    updateCards();
  }, [updateCards]);

  return (
    <>
      {console.log(listCards)}
      <FlatList
        data={listCards}
        renderItem={({item}) => {
          return (
            <AnimatedCard
              updateStateComponent={updateStateComponent}
              cardItem={item}>
              <Form
                inputCard={item}
                updateStateComponent={updateStateComponent}
              />
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
