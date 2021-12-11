import {select} from '@database/repository/search';
import {userList} from '@global/types/userList';
import {userList as typeUserList} from '@global/types/userList';

async function loadPublicList(): Promise<userList[] | null> {
  const where = 'publicList/';
  const datasOfTheList: typeUserList[] = [];

  return select(where)
    .then(function (response) {
      const datas = response.toJSON();
      if (datas === null) {
        return null;
      }

      response.forEach(function (response) {
        const datasPublicList = response.toJSON() as typeUserList;
        datasOfTheList.push({
          id: response.key as string,
          listTitle: datasPublicList.listTitle,
          cards: datasPublicList.cards,
          quantity: datasPublicList.quantity,
          user: {
            userName: datasPublicList.user.userName,
            photoUrl: datasPublicList.user.photoUrl,
          },
        });
      });

      return datasOfTheList;
    })
    .catch(function (error) {
      throw new Error(error.message);
    });
}

export {loadPublicList};
