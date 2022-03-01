import {db as connection} from '../connection';
import settingEnvironment from '../settingEnvironment';

async function update(datas: object, where: string) {
  const databaseUrl = settingEnvironment(where);

  connection()
    .then(function (database) {
      database.ref(databaseUrl).update(datas);
    })
    .catch(function (error: any) {
      return Promise.reject(new Error(error.message));
    });
}

export {update};
