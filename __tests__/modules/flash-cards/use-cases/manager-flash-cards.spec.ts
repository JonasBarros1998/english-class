import {managerFlashCards} from '@modules/flash-cards/use-cases/manager-flash-cards';
import {findFlashCardsInStorage} from '@modules/flash-cards/use-cases/flash-cards-storage';

const flashCardStorageModule = require('@modules/flash-cards/use-cases/flash-cards-storage.ts');
const flashCardDatabaseModule = require('@modules/flash-cards/use-cases/flash-cards-database');
const managerFlashCardsModule = require('@modules/flash-cards/use-cases/manager-flash-cards.ts');

jest.mock('@react-native-firebase/firestore', () => ({
  firestore: {
    collection: jest.fn(),
  },
}));


const flashCardMock = [
  {
    id: '1234',
    date: '2023-06-28',
    lists: {
      id: '1234',
      title: 'My first Card',
      quantity: 2,
    },
  },
];

const flashCardDataBaseMock = {
  datas: {
    id: "123",
    userId: "890",
    lists: {
      id: "234",
      title: "title",
      quantity: 1
    },
    date: "2023-06-18",
  },
  documentId: "abc123"
}

describe('managerFlashCards', function () {

  it('should call function findFlashCardsInStorage, if flash card in memory is null', async function () {
    const findFlashCardsInStorageMock = jest.spyOn(flashCardStorageModule, 'findFlashCardsInStorage');

    findFlashCardsInStorageMock.mockImplementation(() => Promise.resolve(flashCardMock));
    
    await managerFlashCards();
    expect(findFlashCardsInStorageMock).toHaveBeenCalledTimes(1);
  });


  it('klkl', async function () {
    const findFlashCardsInStorageMock = jest.spyOn(flashCardStorageModule, 'findFlashCardsInStorage');
    findFlashCardsInStorageMock.mockImplementation(() => Promise.reject(null));

    await managerFlashCards().then(function(item) {
      console.log("teste >> ", item);
    });

    expect(1+1).toEqual(2)

  });
    
});
