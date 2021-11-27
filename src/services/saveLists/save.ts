import {insert} from '@database/index';
import {firebase} from '@react-native-firebase/auth';

function saveUserList(datas: any) {
  const where = '/123456789/lists';
  firebase.auth().onAuthStateChanged(user => {
    console.log('null >> ', user);
  });
  // console.log('>>> current User', getAuth.currentUser);
  // insert(datas, where);
}

export {saveUserList};

/**
 * firebase.auth().onAuthStateChanged
 */
