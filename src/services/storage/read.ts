import AsyncStorage from '@react-native-async-storage/async-storage';

type typeReturn = Promise<null | any>;

export async function read(key: string): typeReturn {
  const item = await AsyncStorage.getItem(key);
  if (item === null) {
    return item;
  }
  return JSON.parse(item);
}