import { findAll } from "@services/firestore/actions/read";
import { findAllLists } from "@modules/lists/useCases/readLists";

jest.mock('../../../../src/services/firestore/actions/read.ts');

jest.mock('@react-native-firebase/firestore', () => ({
  firestore: {
    collection: jest.fn(),
  }
}));

jest.mock('@react-native-firebase/analytics', () => ({
  analytics: {
    logEvent: jest.fn(),
  }
}));

const find = findAll as any;

const cardsOfList = [{
  cardsOfList: [{
    id: '123',
    word: 'card',
    context: 'my card',
    translation: 'cartao'
  }],
  title: 'my first card',
  id: '123456'
}]

function mockRequisicao() {
  return new Promise((resolve, _) => {
    resolve(cardsOfList);
  });
}

function mockRequisicaoErro() {
  return new Promise((_, reject) => {
    reject("Error");
  });
}

describe('read lists', function() {

  beforeEach(() => {
    find.mockClear();
  });

  test('should call findAll method one time', async function() {
    find.mockImplementation(() => mockRequisicao());
    await findAllLists();
    expect(find).toHaveBeenCalledTimes(1);
  });

  test('should return a error', async function() {
    find.mockImplementation(() => mockRequisicao());
    await expect(mockRequisicaoErro()).rejects.toEqual("Error");
  });

});
