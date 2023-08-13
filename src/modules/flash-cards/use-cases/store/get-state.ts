import store from '@state/redux/store'

export function getStateFlashCardResult() {
  const {result} = store.getState().flashcards;
  return result;
}
