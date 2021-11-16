import {storageSetItem} from '@storage/setItem';

const nameStorage: any = 123434;

const userInfo: any = 123456;

test('should return error, if send invalid parameter', async function () {
  await expect(storageSetItem(nameStorage, userInfo)).rejects.toThrow();
});

test('should return error, if send invalid parameter value', async function () {
  const storageValidName: any = '@UNIT_TEST';
  const storageInvalidUserInfo: any = null;

  await expect(
    storageSetItem(storageValidName, storageInvalidUserInfo),
  ).rejects.toThrow();
});
