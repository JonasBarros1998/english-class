import { Card } from '@global/interfaces/Card';
import {createNewCard, updateInputCards} from '../../../../src/modules/lists/useCases/addNewCardInList';

describe('function create new card', function() {
  test('should return new card', function() {
    expect(createNewCard()).toEqual(
      expect.objectContaining({
          id: expect.any(String),
          word: expect.any(String),
          translation: expect.any(String),
          context: expect.any(String)
      }),
    );
  });
});

describe('function updateInputCards', function() {
  test('should update the input text in the card', function() {
    const cards:Card[] = [];
    cards.push(createNewCard());
    cards.push(createNewCard());

    const [firstCard, secondCard] = cards;
    
    const updateTextFirstCard = updateInputCards({
      cards,
      cardId: firstCard.id,
      input: {
        value: 'update word input text',
        name: 'word'
      }
    });

    const updateTextSecondCard = updateInputCards({
      cards,
      cardId: secondCard.id,
      input: {
        value: 'update second card',
        name: 'context'
      }
    });

    expect(updateTextFirstCard[0]).toEqual(
      expect.objectContaining({
        word: 'update word input text',
      }),
    );

    expect(updateTextSecondCard[1]).toEqual(
      expect.objectContaining({
        context: 'update second card',
      }),
    );

  });
})