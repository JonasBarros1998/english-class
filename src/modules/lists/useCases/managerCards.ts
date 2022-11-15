import { Card } from '@global/interfaces/Card';
import {nanoid} from '@reduxjs/toolkit';

type paramsInputCard = {
  cards: Card[], 
  cardId: string, 
  input: {
    value: string,
    name: 'word'|'context'|'translation'
  }
}

export function createNewCard(): Card {
  return {
    id: nanoid(),
    word: '',
    translation: '',
    context: ''
  }
}

export function updateInputCards({cards, cardId, input: {value, name}}: paramsInputCard) {
  const copyArr = cards.map((item) => {
    return item;
  })

  copyArr.filter((card) => {
    if (card.id === cardId) {
      card[name] = value;
    } 
  });
  
  return copyArr;
}

export function deleteOneCard({cards, cardId}: {cards: Card[], cardId: string}) {
  const copyArr = cards.map((item) => item);

  copyArr.filter((card, index) => {
    if (card.id === cardId) {
      copyArr.splice(index, 1)
    } 
  });
  
  return copyArr;
}
