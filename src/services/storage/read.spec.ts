import AsyncStorage from "@react-native-async-storage/async-storage";
import { insert } from "./insert";
import { read } from "./read";

describe("async storage", function() {
  const storageKey = "@valueMock";
  const storageValue = {value: 'mock'};

  beforeAll(async function() {
    await insert(storageKey, storageValue);
  });

  afterAll(async function() {
    await AsyncStorage.removeItem(storageKey);
  });

  test("Should return the content of the variable StorageValue", function() {
    return expect(
        Promise.resolve(read(storageKey))
      ).resolves.toEqual(storageValue);
  });  

})
