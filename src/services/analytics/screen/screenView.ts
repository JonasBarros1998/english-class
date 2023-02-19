import analytics from '@react-native-firebase/analytics';

type description = {
  screenName: string,
  screenClass: string
}

export async function screenView(descriptionScreen: description) {
  return analytics().logScreenView(descriptionScreen)
    .catch(function(error) {
      console.log(`ANALYTICS ERROR [${descriptionScreen.screenName}]`);
      console.error(error.message);
      throw error;
    });
}
