import AsyncStorage from '@react-native-async-storage/async-storage';

async function storageSetItem(key: string, value: string) {
  if (typeof key !== 'string') {
    throw new TypeError(`key is ${typeof key} expect receiver a string`);
  }

  if (typeof value !== 'string') {
    throw new TypeError(`value is ${typeof value} expect recevier a string`);
  }

  await AsyncStorage.setItem(key, value);
}

export {storageSetItem};
