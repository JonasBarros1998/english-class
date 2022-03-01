import {db as database} from '../connection';
import settingEnvironment from '../settingEnvironment';

async function select(where: string, quantity?: number) {
  const databaseUrl = settingEnvironment(where);
  return database()
    .then(async function (connection) {
      if (typeof quantity === 'undefined') {
        return connection.ref(databaseUrl).once('value');
      }
      return connection.ref(databaseUrl).limitToFirst(quantity).once('value');
    })
    .catch(function (error) {
      return Promise.reject(new Error(error));
    });
}

async function selectToJson(where: string, quantity?: number) {
  const datas: any[] = [];
  const databaseUrl = settingEnvironment(where);

  const selectDatas = await select(databaseUrl, quantity);
  selectDatas.forEach(function (list) {
    datas.push(list.toJSON());
  });

  return datas;
}

export {select, selectToJson};
