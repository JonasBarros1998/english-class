import { searchUserInDatabase } from "@modules/auth/useCases/searchUserInDatabase";

import {filterById} from '@services/firestore/actions/filter';
import { collections } from "@services/firestore/constants/collections";

jest.mock("../../../../src/services/firestore/actions/filter.ts");

jest.mock('@react-native-firebase/firestore', () => ({
  firestore: {
    collection: jest.fn(),
  }
}));

const filter = filterById as any;

function mockRequisicao() {
  return new Promise((resolve, _) => {
    resolve(true);
  });
}

function mockRequisicaoErro() {
  return new Promise((_, reject) => {
    reject(false);
  });
}

describe('searchUserInDatabase', function() {

  beforeEach(() => {
    filter.mockClear();
  });
  
  test('should call once the method filterById', async function() {
    filter.mockImplementation(() => mockRequisicao());
    await searchUserInDatabase("123456789");
    expect(filter).toHaveBeenCalledTimes(1);
  });

  test('should call filterById method with two parameters: collections lists and list id', async function() {
    filter.mockImplementation(() => mockRequisicao());
    await searchUserInDatabase("123456789");
    expect(filter).toHaveBeenCalledWith(collections.users, "123456789");
  });

  test('should return false, if happen a error', async function() {
    filter.mockImplementation(() => mockRequisicaoErro());
    await expect(searchUserInDatabase("123456789")).resolves.toBeFalsy();
  });

  test('should return true', async function() {
    filter.mockImplementation(() => mockRequisicao());
    await expect(searchUserInDatabase("123456789")).resolves.toBeTruthy();
  })

})