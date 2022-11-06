import AsyncStorage from '@react-native-async-storage/async-storage';

export async function read<Type>(key: string): Promise<Type | null> {
  const item = await AsyncStorage.getItem(key);
  if (item === null) {
    return item;
  }
  return JSON.parse(item);
}