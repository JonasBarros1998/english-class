import {db as database} from '../connection';

async function select(where: string) {
  return database()
    .then(async function (connection) {
      return connection.ref(where).once('value');
    })
    .catch(function (error) {
      return Promise.reject(new Error(error));
    });
}

async function selectWithLimit(where: string, limit: number) {
  return database()
    .then(async function (connection) {
      return connection.ref(where).limitToFirst(limit).once('value');
    })
    .catch(function (error) {
      return Promise.reject(new Error(error.message));
    });
}

export {select, selectWithLimit};
