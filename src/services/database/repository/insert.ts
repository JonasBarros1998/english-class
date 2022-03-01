import {db as connection} from '../connection';
import settingEnvironment from '../settingEnvironment';

async function insert(datas: Array<any>, where: string): Promise<any[]> {
  const databaseUrl = settingEnvironment(where);
  return connection()
    .then(function (database) {
      const reference = database.ref(databaseUrl);
      return datas.map((data: any) => {
        const pushData = reference.push();
        const item = addUniqueId(data, pushData.key);
        pushData.set(item).catch(function (error) {
          return Promise.reject(new Error(error.message));
        });
        return data;
      });
    })
    .catch(function (erro) {
      return Promise.reject(new Error(erro.message));
    });
}

function addUniqueId(card: any, idFirestore: string | null): any {
  const cardCopy = Object.assign(card, {});
  Object.defineProperty(cardCopy, 'id', {
    enumerable: true,
    configurable: true,
    writable: true,
    value: idFirestore,
  });
  return cardCopy;
}

export {insert};
