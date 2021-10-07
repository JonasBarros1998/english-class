import {db as connection} from '../connection';

async function insert(datas: Array<any>, where: string): Promise<any[]> {
  return connection()
    .then(function (database) {
      const reference = database.ref(where);
      return datas.map((data: any) => {
        reference
          .push()
          .set(data)
          .then(function () {
            return data;
          })
          .catch(function (error) {
            return Promise.reject(new Error(error.message));
          });
      });
    })
    .catch(function (erro) {
      return Promise.reject(new Error(erro.message));
    });
}

export {insert};
