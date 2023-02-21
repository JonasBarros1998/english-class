import analytics from '@react-native-firebase/analytics';
import {selectEnvironment} from '../environment';

type description = {
  screenName: string,
  screenClass: string
}

export async function screenView(descriptionScreen: description) {
  const screen = Object.assign<description, {}>(descriptionScreen, {});

  return analytics().logScreenView({
    screen_class: selectEnvironment(screen.screenClass) as string,
    screen_name: selectEnvironment(screen.screenName) as string
  })
    .catch(function(error) {
      console.log(`ANALYTICS ERROR [${descriptionScreen.screenName}]`);
      console.error(error.message);
      throw error;
    });
}
