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

const listAllCards: Array<card> = [initialCard];

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

export {addNewCardEmpty, updateForm, getListCards};
