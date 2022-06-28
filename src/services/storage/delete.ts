import AsyncStorage from '@react-native-async-storage/async-storage';

export async function remove(key: string): Promise<{status: string}|void> {
  return AsyncStorage.removeItem(key)
    .then(function () {
      return {status: 'ok'};
    })

    .catch(function (error: Error) {
      throw error;
    });
}