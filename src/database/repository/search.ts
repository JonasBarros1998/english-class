import {db as connectionDb} from '../connection';

async function searchAll(path: string) {
  return connectionDb()
    .then(function(db) {
      return db.ref(path).once('value');
    })
    .catch(function(error) {
      return Promise.reject(new Error(error));
    });
}

export {searchAll};
