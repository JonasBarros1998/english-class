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
  userId: string,
  documentId: string,
  flashCards?: FlashCardInList[]
}

export interface ListOnDatabase {
  datas: {
    title: string,
    id: string,
    userId: string
    cardsOfList: Card[],
    documentId: string,
    flashCards?: FlashCardInList[]
  },
  documentId: string
}

export interface FlashCardInList {
  userId: string,
  flashcardId: string
}
