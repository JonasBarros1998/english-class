import AsyncStorage from "@react-native-async-storage/async-storage";
import { insert } from "../../../src/services/storage/insert";
import { read } from "../../../src/services/storage/read";

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

  test("Shoule return null value", function() {
    const storageValue = null as any;

    return expect(
      Promise.resolve(read(storageValue))
    ).resolves.toEqual(storageValue);
  })

})
