import AsyncStorage from "@react-native-async-storage/async-storage";
import { insert } from "./insert";
import { remove } from "./delete";

describe("async storage", function() {
  const storageKey = "@valueMock";
  const storageValue = {value: 'mock'};

  beforeAll(async function() {
    await insert(storageKey, storageValue);
  });

  test("should remove storage item", function() {
    return expect(
        Promise.resolve(remove(storageKey))
      ).resolves.toEqual({status: 'ok'});
  });  

})
