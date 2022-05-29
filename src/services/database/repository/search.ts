import {FirebaseDatabaseTypes} from '@react-native-firebase/database';
import {db as database} from '../connection';
import settingEnvironment from '../settingEnvironment';

async function select(
  where: string,
  quantity?: number,
): Promise<FirebaseDatabaseTypes.DataSnapshot> {
  const databaseUrl = settingEnvironment(where);
  return database()
    .then(async function (connection) {
      if (typeof quantity === 'undefined') {
        return connection.ref(databaseUrl).once('value');
      }
      return connection.ref(databaseUrl).limitToFirst(quantity).once('value');
    })
    .catch(function (error) {
      console.log(error);
      return Promise.reject(new Error(error));
    });
}

async function selectToJson(where: string) {
  return await select(where).then(firebase => firebase.toJSON());
}

async function selectChildrenToJson(where: string) {
  const datas: any[] = [];
  await select(where).then(function (firebase) {
    firebase.forEach(function (item) {
      datas.push(item.toJSON());
    });
  });

  return datas;
}

export {select, selectToJson, selectChildrenToJson};
