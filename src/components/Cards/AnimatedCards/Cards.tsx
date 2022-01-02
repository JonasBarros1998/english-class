import React, {useState, useEffect, useCallback} from 'react';
import {FlatList} from 'react-native';
import {Center} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import Form from './Form';
import AnimatedCard from './Animated';
import {createCard} from '@global/types/cards';
import CreateCardButton from './CreateCardButton';
import {addNewCard} from '@pubsub/reducers/listOfCards';
import {addNewCardEmpty} from '../useCase/cards';
import {updateTextOfCard} from '@pubsub/reducers/listOfCards';
import {deleteOneCard} from '@pubsub/reducers/listOfCards';

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

  function changeInputs(cards: createCard) {
    dispatch(
      updateTextOfCard({
        form: {card: cards},
        type: 'cards',
      }),
    );
  }

  function deleteCard(card: createCard) {
    dispatch(deleteOneCard({type: 'cards', form: {card: card}}));
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
            <AnimatedCard cardItem={item} deleteCard={deleteCard}>
              <Form
                inputCard={item}
                updateStateComponent={updateStateComponent}
                changeInputs={changeInputs}
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
