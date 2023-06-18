import {managerFlashCards} from '@modules/flash-cards/use-cases/manager-flash-cards';

const flashCardStorageModule = require('@modules/flash-cards/use-cases/flash-cards-storage.ts');
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

describe('managerFlashCards', function () {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should call function findFlashCardsInStorage, if flash card in memory is null', async function () {
    const findFlashCardsInStorageMock = jest.spyOn(flashCardStorageModule, 'findFlashCardsInStorage');

    findFlashCardsInStorageMock.mockImplementationOnce(() =>
      Promise.resolve(flashCardMock),
    );
    
    await managerFlashCards();
    expect(findFlashCardsInStorageMock).toHaveBeenCalledTimes(1);
  });

});
