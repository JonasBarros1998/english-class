import AsyncStorage from '@react-native-async-storage/async-storage';

type typeReturn = Promise<Error | {status: string}>;

export async function insert(key: string, value: any): typeReturn {
  return AsyncStorage.setItem(key, JSON.stringify(value))
    .then(function () {
      return {status: 'ok'};
    })

    .catch(function (error: Error) {
      throw error;
    });
}
