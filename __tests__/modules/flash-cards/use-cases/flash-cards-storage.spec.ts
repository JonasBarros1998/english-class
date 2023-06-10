import {addFlashCardInSTorage, findFlashCardsInStorage} from '@modules/flash-cards/use-cases/flash-cards-storage';
import { read } from "@services/storage/read";
import { insert } from "@services/storage/insert";
import {STORAGE_FLASHCARDS} from '@global/constants';
import { FlashCard } from '@global/interfaces/FlashCard';

const insertModule = require("@services/storage/insert");
const readModule = require("@services/storage/read");
const captureErrorExceptionModule = require("@services/errorTracking/exception/captureErrorException");


const datasFlashCards: FlashCard[] = [{
  id: '123',
  date: "2023-05-27", 
  lists: {
    title: 'my list',
    id: '1234',
    userId: '123abc',
    cardsOfList: [{
      id: '123',
      word: 'card',
      context: 'my card',
      translation: 'cartao'
    }]
  },
}]


describe('add flash-card', function() {

  afterEach(function() {
    jest.spyOn(insertModule, 'insert').mockReset();
  })

  test('should add new flash-card on storage', async function() {

    await addFlashCardInSTorage(datasFlashCards);

    const flashcardInStorage = (await read(STORAGE_FLASHCARDS));

    expect(flashcardInStorage).toMatchObject(datasFlashCards);
    
  });
  
  test('if happen a error, should call function captureException', async function() {

    jest.spyOn(insertModule, 'insert').mockImplementation(() => {
      return new Promise((_, reject) => {
        reject("shouldn't save datas on storage");
      });
    });

    await expect(addFlashCardInSTorage(datasFlashCards)).rejects.toThrow();

  });
  
  
  test('should call function for send the error to sentry', async function() {

    const captureErrorExceptionSpyOn = jest
      .spyOn(captureErrorExceptionModule, 'captureErrorException')
      .mockImplementation(() => {});

    jest.spyOn(insertModule, 'insert').mockImplementation(() => {
      return new Promise((_, reject) => {
        reject("shouldn't save datas on storage");
      });
    });

    await addFlashCardInSTorage(datasFlashCards)
      .catch(function() {
        expect(captureErrorExceptionSpyOn).toHaveBeenCalledTimes(1);
      }) 

  });
});


describe("find flash cards on storage", function() {

  test("should find flashcards object in storage", async function() {
    
    await insert(STORAGE_FLASHCARDS, datasFlashCards);

    await expect(findFlashCardsInStorage()).resolves.toMatchObject(datasFlashCards);
  });


  test("should find flashcards object in storage", async function() {
    
    await insert(STORAGE_FLASHCARDS, datasFlashCards);

    await expect(findFlashCardsInStorage()).resolves.toMatchObject(datasFlashCards);
  });


  test("should call function captureErrorException", async function() {

    const captureErrorExceptionSpyOn = jest
      .spyOn(captureErrorExceptionModule, 'captureErrorException')
      .mockImplementation(() => {});

    jest.spyOn(readModule, 'read').mockImplementation(() => {
      return new Promise((_, reject) => {
        reject("shouldn't read datas on storage");
      });
    });

    await insert(STORAGE_FLASHCARDS, datasFlashCards);

    await findFlashCardsInStorage()
      .catch(function() {
        expect(captureErrorExceptionSpyOn).toHaveBeenCalledTimes(1);
      });
  });

  test("if happen a error, should throw a new Error", async function() {

    jest
      .spyOn(captureErrorExceptionModule, 'captureErrorException')
      .mockImplementation(() => {});

    jest.spyOn(readModule, 'read').mockImplementation(() => {
      return new Promise((_, reject) => {
        reject("shouldn't read datas on storage");
      });
    });

    await expect(findFlashCardsInStorage()).rejects.toThrow();

  });

});

