import { List } from "@global/interfaces/Card";
import { getListDetails } from "@modules/lists/useCases/getListDetails";

import {filterById} from '@services/firestore/actions/filter';
import { collections } from "@services/firestore/constants/collections";

jest.mock("../../../../src/services/firestore/actions/filter.ts");

jest.mock('@react-native-firebase/firestore', () => ({
  firestore: {
    collection: jest.fn(),
  }
}));

const cardsOfList = {
  cardsOfList: [{
    id: '123',
    word: 'card',
    context: 'my card',
    translation: 'cartao'
  }],
  title: 'my first card',
  id: '123456'
}

const filter = filterById as any;

filter.mockImplementation(() => {
  return new Promise((resolve, _) => {
    resolve(cardsOfList);
  });
});

describe('list details', function() {

  test('should call filterById method one time', async function() {
    await getListDetails("123456");
    expect(filter).toHaveBeenCalledTimes(1);
  });

  test('should call filterById method with two parameters: collections lists and list id', async function() {
    await getListDetails("123456");
    expect(filter).toHaveBeenCalledWith(collections.lists, "123456");
  });

});

