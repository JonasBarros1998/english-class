import {db as connection} from '../connection';

async function update(datas: object, where: string) {
  connection()
    .then(function (database) {
      database.ref(where).update(datas);
    })
    .catch(function (error: any) {
      return Promise.reject(new Error(error.message));
    });
}

export {update};
