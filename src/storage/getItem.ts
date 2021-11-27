import AsyncStorage from '@react-native-async-storage/async-storage';

async function storageGetItem(key: string) {
  if (typeof key === 'string') {
    const dados = await AsyncStorage.getItem(key);
    if (dados !== null) {
      return JSON.parse(dados);
    }
    return null;
  }

  throw new TypeError(`key is ${typeof key}, expect receiver a string`);
}

export {storageGetItem};
