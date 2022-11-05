export interface Card {
  id: string,
  word: string,
  context: string,
  translation: string
}

export interface List {
  cardsOfList: Card[],
  title: string,
  id: string,
}
