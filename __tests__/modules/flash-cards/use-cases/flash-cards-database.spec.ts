import {findFlashCardsOnDatabase, findListOnDatabase} from '@modules/flash-cards/use-cases/flash-cards-database'
import {User} from '@global/interfaces/User';
import {addUser} from '@state/redux/slices/user';
import store from '@state/redux/store';
import { collections } from '@services/firestore/constants/collections';

const filterModule = require("@services/firestore/actions/filter");

const captureErrorExceptionModule = require("@services/errorTracking/exception/captureErrorException");

jest.mock('@react-native-firebase/firestore', () => ({
  firestore: {
    collection: jest.fn(),
  }
}));

const user: User = {
  date: "2023-05-20", 
  email: "teste.teste@gmail.com",
  id: "123", 
  name: "teste", 
  photoUrl: "https://myphoto.png"
}

describe("findFlashCardsOnDatabase", function() {

  beforeAll(function() {
    store.dispatch(addUser(user))
  });

  test("should call function filterBy with params for create the query", async function() {

    const filterBy = jest.spyOn(filterModule, "filterBy").mockImplementation(() => {
      return new Promise((resolve, _) => {
        resolve(true);
      })
    });

    await findFlashCardsOnDatabase();

    expect(filterBy).toHaveBeenCalledTimes(1);
    expect(filterBy).toHaveBeenCalledWith({columnName: "userId", value: user.id}, collections.flashCards);
    
  });


  test("if happen a erro in function filterBy, should throw error", async function() {

    const query = {columnName: "userId", value: "123"};

    jest.spyOn(filterModule, "filterBy").mockImplementation(() => {
      return new Promise((_, reject) => {
        reject(new Error("permission error"));
      })
    });

    jest
      .spyOn(captureErrorExceptionModule, 'captureErrorException')
      .mockImplementation(() => {});

    await expect(findFlashCardsOnDatabase())
      .rejects
      .toThrowError(`permission error | findFlashCardsOnDatabase | ${JSON.stringify(query)}`);
  });


  test("if happen a erro in function filterBy, should call captureErrorException function", async function() {

    jest.spyOn(filterModule, "filterBy").mockImplementation(() => {
      return new Promise((_, reject) => {
        reject(new Error("permission error"));
      })
    });

    const captureErrorExceptionSpyOn = jest
      .spyOn(captureErrorExceptionModule, 'captureErrorException')
      .mockImplementation(() => {});
    
    await findFlashCardsOnDatabase()
      .catch(function() {
        expect(captureErrorExceptionSpyOn).toHaveBeenCalledTimes(1);
      })
    
  });

});

