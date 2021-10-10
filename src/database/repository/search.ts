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

export {select};
