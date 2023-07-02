export const navigateToLists = (navigation: any) => {
  navigation.navigate('lists');
}

export const navigateToFlashCards = (navigation: any) => {
  navigation.navigate('flashcards');
}

export const navigateToFlashCardList = (navigation: any, flashCardId: string) => {
  navigation.push("flashCardsList", {flashCardId});
}

export const redirectToResultFlashCard = (navigation: any) => {
  navigation.navigate("main")
}

