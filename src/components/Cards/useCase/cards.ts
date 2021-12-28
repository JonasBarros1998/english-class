import {createCard, inputName} from '@global/types/cards';

function generateUniqueId() {
  return Math.floor(Math.random() * 1000000);
}

let listAllCards: Array<createCard> = [];

function addNewCardEmpty() {
  const cardEmpty = {
    id: generateUniqueId(),
    word: '',
    translation: '',
    context: '',
  };
  listAllCards.push(cardEmpty);
}

function updateForm(input: string, card: createCard, inputType: inputName) {
  card[inputType] = input;

  listAllCards.filter((item, index) => {
    if (item.id === card.id) {
      listAllCards[index] = item;
    }
  });
}

function updateCardList(cards: createCard[]) {
  listAllCards.splice(0, listAllCards.length);
  listAllCards.push(...cards);
}

function getListCards() {
  return listAllCards;
}

function clearList() {
  listAllCards.splice(0, listAllCards.length);
}

function deleteItem(card: createCard) {
  listAllCards.filter(function (currentValue, index) {
    if (currentValue.id === card.id) {
      listAllCards.splice(index, 1);
      return;
    }
  });
}

export {
  addNewCardEmpty,
  updateForm,
  getListCards,
  clearList,
  deleteItem,
  updateCardList,
};
