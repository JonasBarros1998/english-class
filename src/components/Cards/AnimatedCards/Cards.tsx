import React from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Box} from 'native-base';
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

type param = {
  isDisableButton?: boolean;
};

function Cards(props: param) {
  const dispatch = useDispatch();
  const listOfCards = useSelector((state: any) => state.listOfCards);

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

  return (
    <>
      <FlatList
        data={listOfCards.cards}
        renderItem={({item, index}) => {
          return (
            <>
              <AnimatedCard cardItem={item} deleteCard={deleteCard}>
                <Form
                  inputCard={item}
                  updateStateComponent={updateStateComponent}
                  changeInputs={changeInputs}
                />
              </AnimatedCard>
              {listOfCards.cards.length - 1 === index ? (
                <>
                  <Box marginBottom={'32'} />
                </>
              ) : (
                <></>
              )}
            </>
          );
        }}
      />
      {typeof props.isDisableButton === 'undefined' ||
      props.isDisableButton === true ? (
        <CreateCardButton updateCard={updateStateComponent} />
      ) : (
        <></>
      )}
    </>
  );
}

export default Cards;
