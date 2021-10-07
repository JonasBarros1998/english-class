import {db as connection} from '../connection';

async function insert(datas: any, where: string) {
  return connection()
    .then(function (database) {
      database
        .ref(where)
        .set(datas)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    })
    .catch(function (erro) {
      Promise.reject(new Error(erro.message));
    });
}

export {insert};
