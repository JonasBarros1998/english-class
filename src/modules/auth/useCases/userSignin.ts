import {userSignin} from '../services/login';
import {USER_STORAGE} from '@global/constants';

import {
  checkIfUserExistInDatabase,
  saveUserInDatabase,
} from '../services/saveUserInDatabase';
import {getUserDataInTheStorage} from '../services/getDatasInTheStorage';
import {dispatchAction, dispatchUserData} from '../services/dispatchUserAction';
import {userSignIn} from '../types';

// Função para logar o usuario na aplicação pela primeira vez
async function authenticateUserWhenAccessFirstTime(datasOfUser: userSignIn) {
  const formatDatasOfUser = {
    ...datasOfUser,
    lists: {
      publicLists: [],
      privateLists: [],
    },
  };

  const [{id}] = await saveUserInDatabase(formatDatasOfUser);
  dispatchUserData(JSON.stringify({...formatDatasOfUser, id}));
  dispatchAction(true);
}

/**
 * Função para verificar se o usuário que está acessando a aplicação
 * já está com os seus dados cadastrados no banco de dados
 */
async function managerAccess(): Promise<void> {
  const userDatas = await getUserDataInTheStorage(USER_STORAGE);

  if (userDatas === null) {
    const datasOfUser = (await userSignin()) as userSignIn;
    const existUser = await checkIfUserExistInDatabase(
      datasOfUser.uid as string,
    );

    if (existUser === false) {
      await authenticateUserWhenAccessFirstTime(datasOfUser);
      return;
    }

    const [firstItem] = existUser;
    dispatchUserData(JSON.stringify(firstItem));
  }

  dispatchAction(true);
}

export {userSignin, authenticateUserWhenAccessFirstTime, managerAccess};
