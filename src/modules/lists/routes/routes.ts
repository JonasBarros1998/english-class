export const navigateToListDetails = (navigation: any, listId: string): void => {
  navigation.navigate('details', {
    id: listId
  })
}