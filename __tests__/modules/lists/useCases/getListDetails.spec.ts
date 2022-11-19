import { getListDetails } from "@modules/lists/useCases/getListDetails";

import {filterById} from '@services/firestore/actions/filter';
import { collections } from "@services/firestore/constants/collections";

jest.mock("../../../../src/services/firestore/actions/filter.ts");

jest.mock('@react-native-firebase/firestore', () => ({
  firestore: {
    collection: jest.fn(),
  }
}));

const cardsOfList = [{
  datas: {
    cardsOfList: [{
      id: '123',
      word: 'card',
      context: 'my card',
      translation: 'cartao'
    }],
    title: 'my first card',
    id: '123456'
  },
  documentId: '1234'
}]

const filter = filterById as any;

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

describe('list details', function() {

  beforeEach(() => {
    filter.mockClear();
  });

  test('should call filterById method once', async function() {
    filter.mockImplementation(() => mockRequisicao());
    await getListDetails("123456");
    expect(filter).toHaveBeenCalledTimes(1);
  });

  test('should call filterById method with two parameters: collections lists and list id', async function() {
    filter.mockImplementation(() => mockRequisicao());
    await getListDetails("123456");
    expect(filter).toHaveBeenCalledWith(collections.lists, "123456");
  });

  test('should return a error', async function() {
    filter.mockImplementation(() => mockRequisicaoErro());
    await expect(getListDetails("123456")).rejects.toEqual("Error")
  });

});

