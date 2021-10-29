type card = {
  id: number;
  word: string;
  translation: string;
  context: string;
};

type inputType = 'word' | 'translation' | 'context';

const initialCard = {
  id: Math.floor(Math.random() * 10000),
  word: '',
  translation: '',
  context: '',
};

let listAllCards: Array<card> = [initialCard];

function addNewCardEmpty() {
  listAllCards.push({
    id: Math.floor(Math.random() * 10000),
    word: '',
    translation: '',
    context: '',
  });
}

function updateForm(input: string, card: card, inputType: inputType) {
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

function deleteItem(card: card) {
  listAllCards.some(function (currentValue, index) {
    if (currentValue.id === card.id) {
      listAllCards.splice(index, 1);
      return;
    }
  });
}

export {addNewCardEmpty, updateForm, getListCards, clearList, deleteItem};
