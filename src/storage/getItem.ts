import AsyncStorage from '@react-native-async-storage/async-storage';

async function storageGetItem(key: string) {
  if (typeof key === 'string') {
    return await AsyncStorage.getItem(key);
  }

  throw new TypeError(`key is ${typeof key}, expect receiver a string`);
}

export {storageGetItem};
