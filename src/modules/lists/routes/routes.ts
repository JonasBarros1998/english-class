export const navigateToListDetails = (navigation: any, listId: string): void => {
  navigation.navigate('details', {
    id: listId
  })
}

export const navigateToUpdateList = (navigation: any) => {
  navigation.navigate('update');
}
