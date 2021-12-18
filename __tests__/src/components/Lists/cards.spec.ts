import {
  addNewCardEmpty,
  getListCards,
  updateForm,
} from '@components/Cards/useCase/index';

test('should add new card', function () {
  addNewCardEmpty();

  getListCards().map(function (item) {
    expect(item).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        word: expect.any(String),
        translation: expect.any(String),
        context: expect.any(String),
      }),
    );
  });
});

test('should return a card', function () {
  const [card] = getListCards();
  expect(card).toEqual(
    expect.objectContaining({
      id: expect.any(Number),
      word: expect.any(String),
      translation: expect.any(String),
      context: expect.any(String),
    }),
  );
});

test('should edit a card', function () {
  const [getCard] = getListCards();

  updateForm('editing text', getCard, 'word');
  expect(getCard).toEqual(
    expect.objectContaining({
      id: expect.any(Number),
      word: 'editing text',
      translation: expect.any(String),
      context: expect.any(String),
    }),
  );
});
