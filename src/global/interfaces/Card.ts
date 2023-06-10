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
  userId: string
}

export interface ListOnDatabase {
  datas: {
    title: string,
    id: string,
    userId: string
    cardsOfList: Card[],
  },
  documentId: string
}
