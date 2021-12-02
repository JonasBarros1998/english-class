import {createCard, inputName} from '@global/types/cards';

const initialCard = {
  id: Math.floor(Math.random() * 10000),
  word: '',
  translation: '',
  context: '',
};

let listAllCards: Array<createCard> = [initialCard];

function addNewCardEmpty() {
  listAllCards.push({
    id: Math.floor(Math.random() * 10000),
    word: '',
    translation: '',
    context: '',
  });
}

function updateForm(input: string, card: createCard, inputType: inputName) {
  card[inputType] = input;

  listAllCards.filter((item, index) => {
    if (item.id === card.id) {
      listAllCards[index] = item;
    }
  });
}

function getListCards() {
  return listAllCards;
}

function clearList() {
  listAllCards = [];
  addNewCardEmpty();
}

function deleteItem(card: createCard) {
  listAllCards.some(function (currentValue, index) {
    if (currentValue.id === card.id) {
      listAllCards.splice(index, 1);
      return;
    }
  });
}

export {addNewCardEmpty, updateForm, getListCards, clearList, deleteItem};
