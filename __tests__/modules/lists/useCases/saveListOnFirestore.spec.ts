import {saveListOnFirestore} from '@modules/lists/useCases/saveListOnFirestore';
import { insert } from '@services/firestore/actions/insert';

jest.mock('../../../../src/services/firestore/actions/insert.ts');

jest.mock('@react-native-firebase/firestore', () => ({
  firestore: {
    collection: jest.fn(),
  }
}));

const insertOnFirestore = insert as any;

function mockRequestInsert() {
  return new Promise((resolve, _) => {
    resolve('');
  });
}

function mockRequestErrorInsert() {
  return new Promise((_, reject) => {
    reject('Error');
  });
}

const mockObject = {
  cardsOfList: [{
    context: 'car',
    id: '1234',
    translation: 'carro',
    word: 'car'
  }],
  title: 'my list',
  id: '1234'
}

describe('saveListOnFirestore', function() {
  test('should call insert function one times', function() {
    insertOnFirestore.mockImplementation(() => mockRequestInsert());
    saveListOnFirestore(mockObject);
    expect(insertOnFirestore).toHaveBeenCalledTimes(1);
  });
  
  test('should return a error', async function() {
    insertOnFirestore.mockImplementation(() => mockRequestErrorInsert());
    await expect(saveListOnFirestore(mockObject)).rejects.toEqual('Error');
  });
})

