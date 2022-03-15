import {userSignin} from '../services/login';
import {addDatasInTheStorage} from '../services/addDatasInTheStorage';
import {USER_STORAGE} from '@global/constants';
import {saveUserInfo} from './saveUserInfo';
import {checkIfUserExistInDatabase} from '../services/saveUserInDatabase';
import {getUserDataInTheStorage} from '../services/getDatasInTheStorage';
import {dispatchAction} from '../services/dispatchUserAction';
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

  addDatasInTheStorage(USER_STORAGE, JSON.stringify(formatDatasOfUser));

  await saveUserInfo(formatDatasOfUser.uid as string, formatDatasOfUser);

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

    const formatDatasOfUser = {
      ...datasOfUser,
      lists: {
        publicLists: [],
        privateLists: [],
      },
    };

    addDatasInTheStorage(USER_STORAGE, JSON.stringify(formatDatasOfUser));
  }

  dispatchAction(true);
}

export {userSignin, authenticateUserWhenAccessFirstTime, managerAccess};
