import database, {firebase} from '@react-native-firebase/database';

type connectionDatabase = {
  appId: string;
  projectId: string;
  apiKey?:string;
  databaseURL?:string;
  storageBucket?: string;
  messagingSenderId?:string;
  clientId?:string;
  androidClientId?:string;
}

async function db(connectionDatabase?: connectionDatabase) {
  if (typeof connectionDatabase === 'undefined') {
    return Promise.resolve(database()); 
  }

  return firebase.initializeApp(connectionDatabase)
    .then(function(app) {
      return app.database()
    })
    .catch(function(erro){
      return Promise.reject(new Error(erro))
    });
}

export {db};
