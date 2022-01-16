import AsyncStorage from '@react-native-async-storage/async-storage';

async function removeItem(key: string) {
  if (typeof key !== 'string') {
    throw new TypeError(`key is ${typeof key} expect receiver a string`);
  }
  await AsyncStorage.removeItem(key);
}

export {removeItem};
