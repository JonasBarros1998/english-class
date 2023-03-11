import analytics from '@react-native-firebase/analytics';
import { captureErrorException } from '@services/errorTracking/exception/captureErrorException';
import {selectEnvironment} from '../environment';

export async function logEvent(eventName: string, params: object) {
  const formattedEvent = selectEnvironment(eventName) as string;

  analytics()
    .logEvent(formattedEvent, params)
      .catch(function(error) {
        console.log(`ANALYTICS ERROR [${eventName}]`);
        console.error(error.message);
        throw error;
      });
}

export async function loginEventAnalytics() {

  analytics()
    .logLogin({
      method: selectEnvironment('Google') as string,
    })
      .catch(function(error) {
        console.log(`ANALYTICS ERROR Login`);
        console.error(error.message);
        throw error;
      });
}

export async function signupEventAnalytics() {

  analytics()
    .logSignUp({
      method: selectEnvironment('Google') as string,
    })
      .catch(function(error: Error) {
        captureErrorException(error);
        throw error.message;
        
      });
}
