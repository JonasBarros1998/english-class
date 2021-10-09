import {db as database} from '../connection';

async function select(where: string): Promise<any[]> {
  return database()
    .then(async function (connection) {
      return connection
        .ref(where)
        .once('value')
        .then(function (response) {
          return response.val();
        })
        .catch(function (error) {
          return Promise.reject(new Error(error.message));
        });
    })
    .catch(function (error) {
      return Promise.reject(new Error(error));
    });
}

export {select};
