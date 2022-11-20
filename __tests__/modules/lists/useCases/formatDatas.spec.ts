import { formatDatas } from "@modules/lists/useCases/formatDatas";
import {Card} from "@global/interfaces/Card";
import {addUser} from '@state/redux/slices/user';
import store from '@state/redux/store';
import { userInitialState } from "__mocks__/reducer/user";

const cards = {
  cardsOfList: [{
    context: 'auto',
    id: '123',
    translation: 'carro',
    word: 'car'
  }],
  title: 'auto'
};



describe('Format Datas', function() {
  beforeAll(() => {
    store.dispatch(addUser(userInitialState));
  });

  test('should return formatted object', function() {
    expect(formatDatas(cards)).toEqual(
      expect.objectContaining({
        cardsOfList: expect.any(Array<Card>),
        title: expect.any(String)
      })
    );
  });
});
