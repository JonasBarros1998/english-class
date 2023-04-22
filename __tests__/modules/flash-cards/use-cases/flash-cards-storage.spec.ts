import {addFlashCardInSTorage} from '@modules/flash-cards/use-cases/flash-cards-storage';
import { read } from "@services/storage/read";
import {STORAGE_FLASHCARDS} from '@global/constants';
import { FlashCard } from '@global/interfaces/FlashCard';

const insertModule = require("@services/storage/insert");
const captureErrorExceptionModule = require("@services/errorTracking/exception/captureErrorException");


const datasFlashCards: FlashCard = {
  id: '123',
  date: "2023-05-27",
  user: {
    date: "2023-05-27",
    email: 'teste.teste@gmail.com',
    id: '54321',
    name: 'Jonas',
    photoUrl: 'https://myprofile123.png'
  },
  lists: [{
    title: 'my list',
    id: '1234',
    userId: '123abc',
    cardsOfList: [{
      id: '123',
      word: 'card',
      context: 'my card',
      translation: 'cartao'
    }]
  }],
}



describe('add flash-card', function() {

  test('should add new flash-card on storage', async function() {

    await addFlashCardInSTorage(datasFlashCards);

    const flashcardInStorage = (await read(STORAGE_FLASHCARDS));

    expect(flashcardInStorage).toMatchObject({
      ...datasFlashCards
    });

    jest.resetAllMocks();
    
  });
  
  test('if happen a error, should call function captureException', async function() {

    jest.spyOn(insertModule, 'insert').mockImplementation(() => {
      return new Promise((_, reject) => {
        reject("shouldn't save datas on storage");
      });
    });

    await expect(addFlashCardInSTorage(datasFlashCards)).rejects.toThrow();
    jest.resetAllMocks();
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

