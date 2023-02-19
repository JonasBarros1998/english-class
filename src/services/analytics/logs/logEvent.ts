import analytics from '@react-native-firebase/analytics';

export async function logEvent(eventName: string, params: object) {

  analytics()
    .logEvent(eventName, params)
      .catch(function(error) {
        console.log(`ANALYTICS ERROR [${eventName}]`);
        console.error(error.message);
        throw error;
      });
}
