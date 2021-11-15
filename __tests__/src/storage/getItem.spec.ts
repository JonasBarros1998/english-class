import {storageGetItem, storageSetItem} from '@storage/index';

const nameStorage = '@UNIT_TEST';

const userInfo = {
  email: 'user.info@gmail.com.br',
  name: 'mock user',
  token: 'eyth7890',
};

async function createStorage() {
  await storageSetItem(nameStorage, JSON.stringify(userInfo));
}

test('should return user info stored the storage mobile', async function () {
  await createStorage();
  const storage = await storageGetItem(nameStorage);
  expect(storage).toEqual(JSON.stringify(userInfo));
});

test('should return a error, if send a invalid parameter', async function name() {
  await createStorage();
  const storageNameInvalid: any = 12345;
  await expect(storageGetItem(storageNameInvalid)).rejects.toThrow();
});
