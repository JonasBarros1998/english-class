import {update} from '@database/repository/update';
import {userList as typeUserList} from '@global/types/userList';

async function updateListDetails(userList: typeUserList) {
  const where = `privateList/${userList.user.id}/${userList.id}`;
  await update(userList, where);
  return userList;
}

export {updateListDetails};
