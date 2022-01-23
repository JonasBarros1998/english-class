import {db as database} from '../connection';

async function select(where: string, quantity?: number) {
  return database()
    .then(async function (connection) {
      if (typeof quantity === 'undefined') {
        return connection.ref(where).once('value');
      }
      return connection.ref(where).limitToFirst(quantity).once('value');
    })
    .catch(function (error) {
      return Promise.reject(new Error(error));
    });
}

async function selectToJson(where: string, quantity?: number) {
  const datas: any[] = [];

  const selectDatas = await select(where, quantity);
  selectDatas.forEach(function (list) {
    datas.push(list.toJSON());
  });

  return datas;
}

export {select, selectToJson};
