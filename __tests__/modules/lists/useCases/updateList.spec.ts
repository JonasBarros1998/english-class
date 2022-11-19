import { updateList, checkUserPermission } from '@modules/lists/useCases/updateList';
import { update } from '@services/firestore/actions/update';
import { dispatchUser } from '__mocks__/reducer/user';

jest.mock('../../../../src/services/firestore/actions/update.ts');

jest.mock('@react-native-firebase/firestore', () => ({
  firestore: {
    collection: jest.fn(),
  }
}));

function mockRequestUpdate() {
  return new Promise((resolve, _) => {
    resolve('');
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
  id: '1234',
  userId: '123456'
}

const updateOnFirestore = update as any;

describe('update lists', function() {

  beforeAll(() => {
    dispatchUser();
  });

  test('should call update function once', async function() {
    updateOnFirestore.mockImplementation(() => mockRequestUpdate());
    await updateList(mockObject);
    expect(updateOnFirestore).toHaveBeenCalledTimes(1);
  });

  test('The user should not autorize to edit this list', function() {
    expect(checkUserPermission(mockObject)).toBeFalsy();
  });
});

