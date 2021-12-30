import {db as connection} from '../connection';

async function insert(datas: Array<any>, where: string): Promise<any[]> {
  return connection()
    .then(function (database) {
      const reference = database.ref(where);
      return datas.map((data: any) => {
        const pushData = reference.push();
        const card = addUniqueId(data, pushData.key);
        pushData
          .set(card)
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

function addUniqueId(card: any, idFirestore: string | null): any {
  Object.defineProperty(card, 'id', {
    enumerable: true,
    configurable: true,
    writable: true,
    value: idFirestore,
  });

  return card;
}

export {insert};
