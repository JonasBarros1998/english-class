import React from 'react';
import {FlatList} from 'react-native';
import {Box} from 'native-base';
import {useSelector} from 'react-redux';
import Form from './Form';
import AnimatedCard from './Animated';
import {createCard} from '@global/types/cards';
import CreateCardButton from './CreateCardButton';
import {addNewCard} from '@pubsub/reducers/listOfCards';
import {useDispatch} from 'react-redux';
import {addNewCardEmpty} from '../useCase/cards';
import {updateTextOfCard, deleteOneCard} from '@pubsub/reducers/listOfCards';

/**
 * Component for create new cards
 */
function CreateCards() {
  const datasOfList = useSelector(({listOfCards}: any) => listOfCards);
  const dispatch = useDispatch();

  function updateStateComponent() {
    dispatch(addNewCard({cards: addNewCardEmpty(), type: 'createCards'}));
  }

  function deleteCard(card: createCard) {
    dispatch(deleteOneCard({type: 'createCards', form: {card: card}}));
  }

  function changeInputs(cards: createCard) {
    dispatch(
      updateTextOfCard({
        form: {card: cards},
        type: 'createCards',
      }),
    );
  }

  return (
    <>
      <FlatList
        data={datasOfList.createCards}
        renderItem={({item, index}) => {
          return (
            <>
              <AnimatedCard deleteCard={deleteCard} cardItem={item}>
                <Form
                  inputCard={item}
                  updateStateComponent={updateStateComponent}
                  changeInputs={changeInputs}
                />
              </AnimatedCard>
              {datasOfList.createCards.length - 1 === index ? (
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
      <CreateCardButton updateCard={updateStateComponent} />
    </>
  );
}

export default CreateCards;
