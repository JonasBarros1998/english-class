import React, {useState, useEffect, useCallback} from 'react';
import {FlatList} from 'react-native';
import {Center} from 'native-base';
import {useSelector} from 'react-redux';
import Form from './Form';
import AnimatedCard from './Animated';
import {createCard} from '@global/types/cards';
import CreateCardButton from './CreateCardButton';
import {useDispatch} from 'react-redux';
import {addNewCard} from '@pubsub/reducers/listOfCards';
import {addNewCardEmpty} from '../useCase/cards';

/**
 * Component for render list all cards and upload cards
 *
 */
function Cards() {
  const [listCards, setlistCards] = useState<createCard[]>();
  const datasOfList = useSelector(({listOfCards}: any) => listOfCards);
  const dispatch = useDispatch();

  function updateStateComponent() {
    dispatch(addNewCard({type: 'cards', cards: addNewCardEmpty()}));
  }

  const updateCards = useCallback(() => {
    setlistCards([...datasOfList.cards]);
  }, [datasOfList]);

  useEffect(() => {
    updateCards();
  }, [updateCards]);

  return (
    <>
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

export default Cards;
