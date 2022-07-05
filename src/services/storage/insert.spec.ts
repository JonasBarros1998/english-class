import {insert} from "./insert";
import AsyncStorage from '@react-native-async-storage/async-storage';

describe("Async Storage", function() {
  const storageKey = "@valueMock";
  const storageValue = {value: 'mock'};

  beforeAll(async function() {
    await AsyncStorage.removeItem(storageKey);
  });

  test("if insert a new value in storage", () => {
    return expect(
      Promise.resolve(insert(storageKey, storageValue)
      )).resolves.toEqual({status: 'ok'});
  });
});
